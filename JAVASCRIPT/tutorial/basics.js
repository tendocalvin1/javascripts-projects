


// variables

// var
var numberThree = 6;

var name = "Charles"; // string

function addNumbers() {
    let numberFour = 34;
    console.log(numberFour);
}

addNumbers(); // Call the function to see the output of numberFour

// const
const PI = 3.14;
console.log(PI);

// let
let numberOne = 3;

let numberTwo = 5;

/**
* DataTypes
*/

// int 
let num1 = 8;
console.log(num1);

let num2 = 5;
let num3 = 4;
console.log(num2 + num3);
console.log(num2 - num3);

// strings
let myname = "Charles";
let firstName = "John";
let lastName = "Simon";

let welcome = `Welcome back ${firstName}👏`;
console.log(welcome);
console.log(myname + firstName + lastName);
console.log(firstName.length);
console.log(firstName.toUpperCase());

// booleans

let isStudent = true;
let isInHall = false;

// logical operators
let isStudentAndInHall = isStudent && isInHall;  // && stands for and operator.
console.log(isStudentAndInHall);

console.log(isStudent || isInHall);  // -->|| this stands for or operator.

// Arrays

let fruits = ["mangoes", "oranges", "grapes"]
console.log(fruits);

fruits.push("apples");
fruits.push("pineapples");
console.log(fruits);

// removing values from an array
fruits.pop()
console.log(fruits);

// Objects [This is the same as a dictionary in python.]
let credentials = {
    "email": "chmuganga@ucu.ac.ug",
    "password": 123456,
}

let signup = {
    "first name": "Tendo",
    "last name": "Calvin",
    "email": "tendo.calvin18@gmail.com",
    "password": "123456",
    "age": 19
}
signup["username"] = "David";
console.log(signup);
signup["ConfirmPassword"] = "123456";
console.log(signup);



// accessing values from an object
console.log(signup["first name"]);
console.log(signup["age"]);


// comparison Operators  [this is mainly used in the backend]

console.log(credentials.password == signup.ConfirmPassword);

console.log(credentials.password === signup.ConfirmPassword); // This line of code is commonly used making systems.

// variables // 
let fname = "Arnold";
console.log(fname);




