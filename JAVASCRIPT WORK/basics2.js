// variables //
const christmas_2024 = "12-25-2014";
console.log(christmas_2024);
// The purpose of a constant is to define data that cannot be changed.
// The value of a constant is set at the time of declaration and cannot be changed later.
// Constants are declared using the const keyword.

// reference data types and primitive data types

// string //
let favoritefruit  = 'strawberries';
let favoriteIcecream = 'chocolate';
let favoriteProgrammingLanguange = 'Javascript';

let numberofdoughnuts = 12;
let pi = 3.14

let lovesCoding = true;

let favoriteColor;
console.log(favoriteColor);

favoritefruit = null;

// symbol data type //
const uniqueKey = Symbol();

// object //
let course = {
    name: "Javascript for beginners.",
    duration: 3,
}

let firstname ='Steven';
console.log(typeof firstname);

firstname = 100;
console.log(typeof firstname);

firstname = true;
console.log(typeof firstname);

// OBJECTS //
let course2 = {
    name: "javascript for beginners",
    hours:3
};
console.log(course2.name);
console.log(course2.hours);

course.name = 'Javascript fundamentals';
console.log(course.name);
console.log(course['name']);

course['name'] = 'Javascript 101';
console.log(course['name']);


// arrays // 
let productColors = ['blue','green'];
console.log(productColors);
console.log(productColors[0]);
console.log(typeof productColors);
console.log(productColors.length);


/* FUNCTIONS */

function sayHi(name){
    console.log("Hi " +  name )
}
sayHi('David');

function greeting(name){
    console.log("Hi " + name)
}
greeting('Donald Trump!');

/* when creating functions in javascript, we use the "FUNCTION" keyword */

function greet(name){
    console.log("Hello " + name);
}
greet("Alice!")

function calculateSum(numbers){
   let sum = 0;
   for (let i=0; i < numbers.length; i++){
    sum += numbers[i];
   }
   return sum;
}

const result = calculateSum([1,2,3,4])
console.log("The total sum of the numbers:", result)

function sum(numbers){
    for(let i = 0;i < numbers.length; i++);{
    sum += numbers[i];
    }
    return sum;
}

const addition = calculateSum([3,4,5,6])
console.log("Total sum:",addition)


function findmax(numbers){
    for(let i =0; i < numbers.length;i++);{
    findmax = numbers[1];
    }
    return findmax;
    
}

const max_number = findmax([3,9,2,7,1])
console.log("The maximum number is:",max_number)

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const factor = factorial(5);
console.log("The factorial of 5 is:", factor); // The factorial of 5 is: 120

// Types of functions in Javascript //
function multiply(num1, num2){
    return num1 + num2;
}
console.log(multiply(2,2) );

// what are the two reasons for creating functions in Javascript ?//
// 1. To perform an action 
// 2. To calculate a value and return that value.

// Functions in JavaScript are essential for several reasons, but here are two key ones:
// 1. Reusability: Functions allow you to write a piece of code once and then reuse it whenever needed. This helps reduce redundancy and makes the code more modular and maintainable. For example, if you have a function that calculates the sum of two numbers, you can use this function multiple times without rewriting the same logic.
// 2.Readability and Organization: By using functions, you can break down complex problems into smaller, more manageable chunks. This makes your code easier to read, understand, and debug. Functions provide a clear structure to your code and help in organizing it logically. This way, you can focus on individual tasks or components separately.


// Introduction to operators.//
// assignment operators //
let programmingLanguange = 'javascript';
console.log(programmingLanguange);

 
