const validator =require("validator");

// req.body 

const validate = (data)=>{
   
    const mandatoryFields = ['firstName',"emailId",'password'];

    const isAllowed = mandatoryFields.every((k)=> Object.keys(data).includes(k));

    if(!isAllowed)
        throw new Error("Some fields missing");

    if(!validator.isEmail(data.emailId))
        throw new Error("Invalid email address");

    if(!validator.isStrongPassword(data.password))
        throw new Error("Weak password");
}

module.exports = validate;