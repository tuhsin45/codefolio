const mongoose = require('mongoose');
const Problem = require('../models/problem');
const User = require('../models/user');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT_STRING)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const problems = [
    {
        title: "Add Two Numbers",
        description: `Given two integers nums1 and nums2, return their sum.

Example 1:
Input: nums1 = 5, nums2 = 3
Output: 8

Example 2:
Input: nums1 = -1, nums2 = 2
Output: 1

Constraints:
- -1000 <= nums1, nums2 <= 1000`,
        difficulty: "easy",
        tags: "array",
        visibleTestCases: [
            {
                input: "5 3",
                output: "8",
                explanation: "5 + 3 = 8"
            },
            {
                input: "-1 2",
                output: "1",
                explanation: "-1 + 2 = 1"
            }
        ],
        hiddenTestCases: [
            { input: "0 0", output: "0" },
            { input: "100 200", output: "300" },
            { input: "-50 25", output: "-25" }
        ],
        startCode: [
            {
                language: "cpp",
                initialCode: `#include <iostream>
using namespace std;

int addTwoNumbers(int nums1, int nums2) {
    // Write your solution here
    
}

int main() {
    int nums1, nums2;
    cin >> nums1 >> nums2;
    cout << addTwoNumbers(nums1, nums2) << endl;
    return 0;
}`
            },
            {
                language: "java",
                initialCode: `import java.util.Scanner;

public class Solution {
    public static int addTwoNumbers(int nums1, int nums2) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int nums1 = sc.nextInt();
        int nums2 = sc.nextInt();
        System.out.println(addTwoNumbers(nums1, nums2));
    }
}`
            },
            {
                language: "javascript",
                initialCode: `function addTwoNumbers(nums1, nums2) {
    // Write your solution here
    
}

// Read input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const [nums1, nums2] = input.split(' ').map(Number);
    console.log(addTwoNumbers(nums1, nums2));
    rl.close();
});`
            }
        ],
        referenceSolution: [
            {
                language: "cpp",
                completeCode: `#include <iostream>
using namespace std;

int addTwoNumbers(int nums1, int nums2) {
    return nums1 + nums2;
}

int main() {
    int nums1, nums2;
    cin >> nums1 >> nums2;
    cout << addTwoNumbers(nums1, nums2) << endl;
    return 0;
}`
            },
            {
                language: "java",
                completeCode: `import java.util.Scanner;

public class Solution {
    public static int addTwoNumbers(int nums1, int nums2) {
        return nums1 + nums2;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int nums1 = sc.nextInt();
        int nums2 = sc.nextInt();
        System.out.println(addTwoNumbers(nums1, nums2));
    }
}`
            },
            {
                language: "javascript",
                completeCode: `function addTwoNumbers(nums1, nums2) {
    return nums1 + nums2;
}

// Read input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const [nums1, nums2] = input.split(' ').map(Number);
    console.log(addTwoNumbers(nums1, nums2));
    rl.close();
});`
            }
        ]
    },
    {
        title: "Find Maximum Element",
        description: `Given an array of integers, find and return the maximum element.

Example 1:
Input: [3, 7, 1, 9, 2]
Output: 9

Example 2:
Input: [-1, -5, -2]
Output: -1

Constraints:
- 1 <= array length <= 1000
- -1000 <= array[i] <= 1000`,
        difficulty: "easy",
        tags: "array",
        visibleTestCases: [
            {
                input: "5\n3 7 1 9 2",
                output: "9",
                explanation: "9 is the largest number in the array"
            },
            {
                input: "3\n-1 -5 -2",
                output: "-1",
                explanation: "-1 is the largest among negative numbers"
            }
        ],
        hiddenTestCases: [
            { input: "1\n42", output: "42" },
            { input: "4\n10 20 5 15", output: "20" },
            { input: "3\n-10 -20 -5", output: "-5" }
        ],
        startCode: [
            {
                language: "cpp",
                initialCode: `#include <iostream>
#include <vector>
using namespace std;

int findMax(vector<int>& arr) {
    // Write your solution here
    
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    cout << findMax(arr) << endl;
    return 0;
}`
            },
            {
                language: "java",
                initialCode: `import java.util.Scanner;

public class Solution {
    public static int findMax(int[] arr) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.println(findMax(arr));
    }
}`
            },
            {
                language: "javascript",
                initialCode: `function findMax(arr) {
    // Write your solution here
    
}

// Read input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl.on('line', (input) => {
    lines.push(input);
    if(lines.length === 2) {
        const n = parseInt(lines[0]);
        const arr = lines[1].split(' ').map(Number);
        console.log(findMax(arr));
        rl.close();
    }
});`
            }
        ],
        referenceSolution: [
            {
                language: "cpp",
                completeCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int findMax(vector<int>& arr) {
    return *max_element(arr.begin(), arr.end());
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    cout << findMax(arr) << endl;
    return 0;
}`
            },
            {
                language: "java",
                completeCode: `import java.util.Scanner;

public class Solution {
    public static int findMax(int[] arr) {
        int max = arr[0];
        for(int i = 1; i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.println(findMax(arr));
    }
}`
            },
            {
                language: "javascript",
                completeCode: `function findMax(arr) {
    return Math.max(...arr);
}

// Read input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl.on('line', (input) => {
    lines.push(input);
    if(lines.length === 2) {
        const n = parseInt(lines[0]);
        const arr = lines[1].split(' ').map(Number);
        console.log(findMax(arr));
        rl.close();
    }
});`
            }
        ]
    },
    {
        title: "Count Even Numbers",
        description: `Given an array of integers, count how many numbers are even.

Example 1:
Input: [1, 2, 3, 4, 5, 6]
Output: 3
Explanation: 2, 4, and 6 are even numbers

Example 2:
Input: [1, 3, 5]
Output: 0
Explanation: No even numbers

Constraints:
- 1 <= array length <= 1000
- 0 <= array[i] <= 1000`,
        difficulty: "easy",
        tags: "array",
        visibleTestCases: [
            {
                input: "6\n1 2 3 4 5 6",
                output: "3",
                explanation: "2, 4, and 6 are even numbers"
            },
            {
                input: "3\n1 3 5",
                output: "0",
                explanation: "No even numbers in the array"
            }
        ],
        hiddenTestCases: [
            { input: "5\n2 4 6 8 10", output: "5" },
            { input: "1\n7", output: "0" },
            { input: "4\n0 2 4 6", output: "4" }
        ],
        startCode: [
            {
                language: "cpp",
                initialCode: `#include <iostream>
#include <vector>
using namespace std;

int countEven(vector<int>& arr) {
    // Write your solution here
    
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    cout << countEven(arr) << endl;
    return 0;
}`
            },
            {
                language: "java",
                initialCode: `import java.util.Scanner;

public class Solution {
    public static int countEven(int[] arr) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.println(countEven(arr));
    }
}`
            },
            {
                language: "javascript",
                initialCode: `function countEven(arr) {
    // Write your solution here
    
}

// Read input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl.on('line', (input) => {
    lines.push(input);
    if(lines.length === 2) {
        const n = parseInt(lines[0]);
        const arr = lines[1].split(' ').map(Number);
        console.log(countEven(arr));
        rl.close();
    }
});`
            }
        ],
        referenceSolution: [
            {
                language: "cpp",
                completeCode: `#include <iostream>
#include <vector>
using namespace std;

int countEven(vector<int>& arr) {
    int count = 0;
    for(int num : arr) {
        if(num % 2 == 0) {
            count++;
        }
    }
    return count;
}

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    cout << countEven(arr) << endl;
    return 0;
}`
            },
            {
                language: "java",
                completeCode: `import java.util.Scanner;

public class Solution {
    public static int countEven(int[] arr) {
        int count = 0;
        for(int num : arr) {
            if(num % 2 == 0) {
                count++;
            }
        }
        return count;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.println(countEven(arr));
    }
}`
            },
            {
                language: "javascript",
                completeCode: `function countEven(arr) {
    return arr.filter(num => num % 2 === 0).length;
}

// Read input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl.on('line', (input) => {
    lines.push(input);
    if(lines.length === 2) {
        const n = parseInt(lines[0]);
        const arr = lines[1].split(' ').map(Number);
        console.log(countEven(arr));
        rl.close();
    }
});`
            }
        ]
    },
    {
        title: "Reverse String",
        description: `Given a string, return the string reversed.

Example 1:
Input: "hello"
Output: "olleh"

Example 2:
Input: "world"
Output: "dlrow"

Constraints:
- 1 <= string length <= 1000
- String contains only lowercase English letters`,
        difficulty: "easy",
        tags: "array",
        visibleTestCases: [
            {
                input: "hello",
                output: "olleh",
                explanation: "Reverse of 'hello' is 'olleh'"
            },
            {
                input: "world",
                output: "dlrow",
                explanation: "Reverse of 'world' is 'dlrow'"
            }
        ],
        hiddenTestCases: [
            { input: "a", output: "a" },
            { input: "abc", output: "cba" },
            { input: "programming", output: "gnimmargorp" }
        ],
        startCode: [
            {
                language: "cpp",
                initialCode: `#include <iostream>
#include <string>
using namespace std;

string reverseString(string s) {
    // Write your solution here
    
}

int main() {
    string s;
    cin >> s;
    cout << reverseString(s) << endl;
    return 0;
}`
            },
            {
                language: "java",
                initialCode: `import java.util.Scanner;

public class Solution {
    public static String reverseString(String s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(reverseString(s));
    }
}`
            },
            {
                language: "javascript",
                initialCode: `function reverseString(s) {
    // Write your solution here
    
}

// Read input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    console.log(reverseString(input.trim()));
    rl.close();
});`
            }
        ],
        referenceSolution: [
            {
                language: "cpp",
                completeCode: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string reverseString(string s) {
    reverse(s.begin(), s.end());
    return s;
}

int main() {
    string s;
    cin >> s;
    cout << reverseString(s) << endl;
    return 0;
}`
            },
            {
                language: "java",
                completeCode: `import java.util.Scanner;

public class Solution {
    public static String reverseString(String s) {
        return new StringBuilder(s).reverse().toString();
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(reverseString(s));
    }
}`
            },
            {
                language: "javascript",
                completeCode: `function reverseString(s) {
    return s.split('').reverse().join('');
}

// Read input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    console.log(reverseString(input.trim()));
    rl.close();
});`
            }
        ]
    },
    {
        title: "Check Palindrome",
        description: `Given a string, determine if it is a palindrome (reads the same forward and backward).

Example 1:
Input: "racecar"
Output: true

Example 2:
Input: "hello"
Output: false

Constraints:
- 1 <= string length <= 1000
- String contains only lowercase English letters`,
        difficulty: "easy",
        tags: "array",
        visibleTestCases: [
            {
                input: "racecar",
                output: "true",
                explanation: "'racecar' reads the same forward and backward"
            },
            {
                input: "hello",
                output: "false",
                explanation: "'hello' does not read the same forward and backward"
            }
        ],
        hiddenTestCases: [
            { input: "a", output: "true" },
            { input: "aba", output: "true" },
            { input: "abc", output: "false" }
        ],
        startCode: [
            {
                language: "cpp",
                initialCode: `#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    
}

int main() {
    string s;
    cin >> s;
    cout << (isPalindrome(s) ? "true" : "false") << endl;
    return 0;
}`
            },
            {
                language: "java",
                initialCode: `import java.util.Scanner;

public class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(isPalindrome(s));
    }
}`
            },
            {
                language: "javascript",
                initialCode: `function isPalindrome(s) {
    // Write your solution here
    
}

// Read input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    console.log(isPalindrome(input.trim()));
    rl.close();
});`
            }
        ],
        referenceSolution: [
            {
                language: "cpp",
                completeCode: `#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;
    while(left < right) {
        if(s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

int main() {
    string s;
    cin >> s;
    cout << (isPalindrome(s) ? "true" : "false") << endl;
    return 0;
}`
            },
            {
                language: "java",
                completeCode: `import java.util.Scanner;

public class Solution {
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while(left < right) {
            if(s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(isPalindrome(s));
    }
}`
            },
            {
                language: "javascript",
                completeCode: `function isPalindrome(s) {
    const reversed = s.split('').reverse().join('');
    return s === reversed;
}

// Read input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    console.log(isPalindrome(input.trim()));
    rl.close();
});`
            }
        ]
    }
];

async function seedProblems() {
    try {
        // Check existing users
        const users = await User.find({});
        console.log('Found users:', users.length);
        
        let adminUser = users.find(user => user.role === 'admin');
        
        if (!adminUser && users.length > 0) {
            // Use first user as admin
            adminUser = users[0];
            console.log('Using first user as admin:', adminUser.emailId);
        } else if (!adminUser) {
            console.log('No users found. Please create a user first through the frontend.');
            process.exit(1);
        } else {
            console.log('Using existing admin user:', adminUser.emailId);
        }

        // Clear existing problems
        await Problem.deleteMany({});
        console.log('Cleared existing problems');

        // Add problems with admin as creator
        const problemsWithCreator = problems.map(problem => ({
            ...problem,
            problemCreator: adminUser._id
        }));

        const result = await Problem.insertMany(problemsWithCreator);
        console.log(`Successfully added ${result.length} problems to the database`);
        
        // Print the problems added
        result.forEach((problem, index) => {
            console.log(`${index + 1}. ${problem.title} (${problem.difficulty})`);
        });
        
        process.exit(0);
    } catch (error) {
        console.error('Error seeding problems:', error);
        process.exit(1);
    }
}

// Run the seeding function
seedProblems();
