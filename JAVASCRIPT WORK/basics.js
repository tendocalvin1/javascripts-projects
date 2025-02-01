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

// // boolean //
// let student = true;

// console.log("Hello",firstname);
// console.log("You are", age ,"years old.");
// console.log("Enrolled:",student);

// document.getElementById("p1").innerHTML = "Hello " + firstname;
// document.getElementById("p2").innerHTML = "You are " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;



const { JSDOM } = require('jsdom');

// Create a new JSDOM instance
const dom = new JSDOM(`<!DOCTYPE html><p id="p1">Hello</p>`);

// Use the simulated document
const document = dom.window.document;

const fname = "John";
document.getElementById("p1").innerHTML = "Hello " + fname;

console.log(document.getElementById("p1").outerHTML);



/* arithmetic express is a combination of...
    operands (values,variables,etc)
    operators(+,-,/,%,*)
    that can be evaluated to a value
    for example y = x +5;
*/

let students = 20;
/*students = students + 1;*/
/*students = students * 2;*/
/*students = students / 2;*/
let extraStudents = students % 3; 

console.log(extraStudents);

