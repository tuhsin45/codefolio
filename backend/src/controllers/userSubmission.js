const Problem = require("../models/problem");
const Submission = require("../models/submission");
const User = require("../models/user");
const {getLanguageById,submitBatch,submitToken} = require("../utils/problemUtility");

const submitCode = async (req,res)=>{
   
    // 
    try{
      
       const userId = req.result._id;
       const problemId = req.params.id;

       let {code,language} = req.body;

      if(!userId||!code||!problemId||!language)
        return res.status(400).send("Some fields missing");
      

      if(language==='cpp')
        language='c++'
      
    //    Fetch the problem from database
       const problem =  await Problem.findById(problemId);
    //    testcases(Hidden)
    
    //   Should I store submission first?
    const submittedResult = await Submission.create({
          userId,
          problemId,
          code,
          language,
          status:'pending',
          testCasesTotal:problem.hiddenTestCases.length
     })

    //    Submit code to Judge0
    
    const languageId = getLanguageById(language);
   
    const submissions = problem.hiddenTestCases.map((testcase)=>({
        source_code:code,
        language_id: languageId,
        stdin: testcase.input,
        expected_output: testcase.output
    }));

    
    const submitResult = await submitBatch(submissions);
    
    const resultToken = submitResult.map((value)=> value.token);

    const testResult = await submitToken(resultToken);
    

    // Update submittedResult
    let testCasesPassed = 0;
    let runtime = 0;
    let memory = 0;
    let status = 'accepted';
    let errorMessage = null;


    for(const test of testResult){
        if(test.status_id==3){
           testCasesPassed++;
           runtime = runtime+parseFloat(test.time)
           memory = Math.max(memory,test.memory);
        }else{
          if(test.status_id==4){
            status = 'error'
            errorMessage = test.stderr
          }
          else{
            status = 'wrong'
            errorMessage = test.stderr
          }
        }
    }


    // Store the result in Database in Submission
    submittedResult.status   = status;
    submittedResult.testCasesPassed = testCasesPassed;
    submittedResult.errorMessage = errorMessage;
    submittedResult.runtime = runtime;
    submittedResult.memory = memory;

    await submittedResult.save();
    
    // Insert ProblemId into userSchema's problemSolved if it is not present there.
    
    // req.result == user Information

    if(!req.result.problemSolved.includes(problemId)){
      req.result.problemSolved.push(problemId);
      await req.result.save();
    }
    
    const accepted = (status == 'accepted')
    res.status(201).json({
      accepted,
      totalTestCases: submittedResult.testCasesTotal,
      passedTestCases: testCasesPassed,
      runtime,
      memory
    });
       
    }
    catch(err){
      res.status(500).send("Internal Server Error "+ err);
    }
}


const runCode = async(req,res)=>{
    
     // 
     try{
      const userId = req.result._id;
      const problemId = req.params.id;

      let {code,language} = req.body;

     if(!userId||!code||!problemId||!language)
       return res.status(400).send("Some fields missing");

   //    Fetch the problem from database
      const problem =  await Problem.findById(problemId);
   //    Use visible test cases (for running/testing)
      if(language==='cpp')
        language='c++'

   //    Submit code to Judge0

   const languageId = getLanguageById(language);

   const submissions = problem.visibleTestCases.map((testcase)=>({
       source_code:code,
       language_id: languageId,
       stdin: testcase.input,
       expected_output: testcase.output
   }));


   const submitResult = await submitBatch(submissions);
   
   const resultToken = submitResult.map((value)=> value.token);

   const testResult = await submitToken(resultToken);

    let testCasesPassed = 0;
    let runtime = 0;
    let memory = 0;
    let status = true;
    let errorMessage = null;

    for(const test of testResult){
        if(test.status_id==3){
           testCasesPassed++;
           runtime = runtime+parseFloat(test.time)
           memory = Math.max(memory,test.memory);
        }else{
          if(test.status_id==4){
            status = false
            errorMessage = test.stderr
          }
          else{
            status = false
            errorMessage = test.stderr
          }
        }
    }

   
  
   res.status(201).json({
    success:status,
    testCases: testResult,
    runtime,
    memory
   });
      
   }
   catch(err){
     res.status(500).send("Internal Server Error "+ err);
   }
}


module.exports = {submitCode,runCode};



//     language_id: 54,
//     stdin: '2 3',
//     expected_output: '5',
//     stdout: '5',
//     status_id: 3,
//     created_at: '2025-05-12T16:47:37.239Z',
//     finished_at: '2025-05-12T16:47:37.695Z',
//     time: '0.002',
//     memory: 904,
//     stderr: null,
//     token: '611405fa-4f31-44a6-99c8-6f407bc14e73',


// User.findByIdUpdate({
// })

//const user =  User.findById(id)
// user.firstName = "Mohit";
// await user.save();