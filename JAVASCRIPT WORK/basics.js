// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// two steps:
//1. declaration (var,let,const)
//2. Assignment (= assignment operator)

let age;
age = 23;
age = age + 2;
console.log(age);

// string //
let firstname = "Tendo";
console.log(firstname);

// boolean //
let student = true;

console.log("Hello",firstname);
console.log("You are", age ,"years old.");
console.log("Enrolled:",student);

document.getElementById("p1").innerHTML = "Hello " + firstname;
