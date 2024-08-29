// 1. Output to the console
console.log("Hello!");

// 2. Create a global variable (and identify it with comments)
// This is a global variable because it's declared outside of any function or block
var globalVar = 10;
console.log("Global variable:", globalVar);

// 3. Create a block variable
if (true) {
    // This is a block variable because it's declared inside an if statement block
    let blockVar = 20;
    console.log("Block variable:", blockVar);
}

// 4. Perform mathematical operations on variables
let result = globalVar + 5; // Adding 5 to the global variable
console.log("Result of adding 5 to globalVar:", result);

// 5. Create a string variable
// This is a string variable that holds text
let myString = "Hello, world!";
console.log("String variable:", myString);

// 6. Create an object variable using const
// This is an object variable that holds key-value pairs
const myObject = {
    name: "Bob",
    age: 32
};
console.log("Object variable:", myObject);
