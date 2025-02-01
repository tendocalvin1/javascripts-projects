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



