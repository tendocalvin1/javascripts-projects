// //  Callbacks in Asynchronous Programming

// 1. What is a Callback?

// A callback is a function that is passed as an argument to another function and is executed later, often after an asynchronous operation completes. Callbacks are commonly used in asynchronous programming to handle tasks like API requests, file reading, or database queries without blocking the execution of other code.

// 2. Why Use Callbacks?

// Non-blocking Execution: Code continues running while waiting for an operation to complete.

// Better Performance: Helps execute multiple tasks concurrently.

// Event-Driven: Useful in handling user interactions, API responses, and I/O operations.


// 3. Example of Callbacks in JavaScript

// JavaScript uses callbacks extensively, especially in asynchronous operations like reading files or making API calls.

// Example: Using Callbacks with setTimeout

// console.log("Start");

// setTimeout(function callback() {
//     console.log("Async operation completed");
// }, 2000);

// console.log("End");

// Output:

// Start
// End
// Async operation completed

// Here, setTimeout executes after 2 seconds, but the rest of the code continues running.

// Example: Callbacks in File Reading (Node.js)

// const fs = require('fs');

// fs.readFile('file.txt', 'utf8', function (err, data) {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log("File content:", data);
// });

// console.log("Reading file...");

// Even though fs.readFile takes time to execute, the program does not pause; instead, it runs the callback function when reading is complete.

// 4. Callback Hell (Pyramid of Doom)

// When multiple callbacks are nested, the code becomes hard to read and maintain, leading to callback hell.

// Example: Callback Hell

// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 complete");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2 complete");
//         callback();
//     }, 1000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3 complete");
//         callback();
//     }, 1000);
// }

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps completed");
//         });
//     });
// });

// This nested structure makes debugging difficult.

// 5. Avoiding Callback Hell

// To simplify callback-based asynchronous code, modern JavaScript provides:

// Promises

// Async/Await


// Example: Using Promises Instead of Callbacks

// function step1() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 1 complete");
//             resolve();
//         }, 1000);
//     });
// }

// function step2() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 2 complete");
//             resolve();
//         }, 1000);
//     });
// }

// function step3() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 3 complete");
//             resolve();
//         }, 1000);
//     });
// }

// step1()
//     .then(step2)
//     .then(step3)
//     .then(() => console.log("All steps completed"));

// This is more readable and avoids deep nesting.

// Example: Using Async/Await (Best Approach)

// async function runSteps() {
//     await step1();
//     await step2();
//     await step3();
//     console.log("All steps completed");
// }

// runSteps();

// This approach looks synchronous but is still non-blocking.


// ---

// 6. Summary

// Callbacks are functions passed as arguments and executed after an operation completes.

// Used for asynchronous operations like file reading, API calls, and timers.

// Callback Hell occurs when callbacks are deeply nested.

