// Promises in Asynchronous Programming

// 1. What is a Promise?

// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It acts as a placeholder for the result of an operation that hasn't completed yet but will in the future.

// 2. Why Use Promises?

// Avoids Callback Hell: Promises make asynchronous code more readable and maintainable.

// Chaining: Promises allow multiple asynchronous operations to be chained together.

// Better Error Handling: Errors can be caught using .catch(), making debugging easier.



// ---

// 3. States of a Promise

// A Promise can be in one of the following states:

// 1. Pending → Initial state, operation is still in progress.


// 2. Fulfilled → Operation completed successfully.


// 3. Rejected → Operation failed.



// Once a promise is fulfilled or rejected, it becomes settled, meaning its state won’t change again.


// ---

// 4. Creating a Promise

// A Promise is created using the Promise constructor, which takes a function with two parameters:

// resolve → Call this when the operation succeeds.

// reject → Call this when the operation fails.


// Example: Creating and Using a Promise

// const myPromise = new Promise((resolve, reject) => {
//     let success = true; // Simulating success or failure

//     setTimeout(() => {
//         if (success) {
//             resolve("Operation was successful!");
//         } else {
//             reject("Operation failed!");
//         }
//     }, 2000);
// });

// // Handling the Promise
// myPromise
//     .then(result => console.log(result))  // Runs if resolved
//     .catch(error => console.error(error)) // Runs if rejected
//     .finally(() => console.log("Promise execution completed"));

// Output (after 2 seconds):

// Operation was successful!
// Promise execution completed

// If success = false, it prints:

// Operation failed!
// Promise execution completed


// ---

// 5. Chaining Promises

// One of the biggest advantages of Promises is chaining, which avoids deep nesting seen in callback hell.

// Example: Chaining Multiple Promises

// function step1() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 1 completed");
//             resolve();
//         }, 1000);
//     });
// }

// function step2() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 2 completed");
//             resolve();
//         }, 1000);
//     });
// }

// function step3() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 3 completed");
//             resolve();
//         }, 1000);
//     });
// }

// // Chaining Promises
// step1()
//     .then(step2)
//     .then(step3)
//     .then(() => console.log("All steps completed"));

// Output (1-second intervals):

// Step 1 completed  
// Step 2 completed  
// Step 3 completed  
// All steps completed


// ---

// 6. Handling Errors in Promises

// Errors in Promises can be caught using .catch(). If any .then() fails, it immediately jumps to .catch().

// Example: Handling Errors in Promise Chains

// function riskyOperation() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = Math.random() > 0.5; // Random success/failure
//             success ? resolve("Success!") : reject("Error occurred!");
//         }, 1000);
//     });
// }

// riskyOperation()
//     .then(result => console.log(result))
//     .catch(error => console.error("Caught an error:", error))
//     .finally(() => console.log("Operation finished"));

// If successful:

// Success!
// Operation finished

// If failed:

// Caught an error: Error occurred!
// Operation finished


// ---

// 7. Combining Multiple Promises

// Using Promise.all() → Runs multiple Promises in parallel, resolving when all are completed.

// const promise1 = new Promise(resolve => setTimeout(() => resolve("Task 1 done"), 2000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve("Task 2 done"), 1000));

// Promise.all([promise1, promise2])
//     .then(results => console.log(results)) // ["Task 1 done", "Task 2 done"]
//     .catch(error => console.error(error));


// ---

// 8. Async/Await (Alternative to Promises)

// Using async/await makes code cleaner and easier to read.

// Example: Using Async/Await

// async function runTasks() {
//     try {
//         await step1();
//         await step2();
//         await step3();
//         console.log("All steps completed");
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }
// }

// runTasks();

// This approach makes the code look synchronous while still being asynchronous.


// ---

// 9. Summary

// Promises represent future values for asynchronous operations.

// They can be resolved (success) or rejected (failure).

// .then() handles success, .catch() handles errors, and .finally() runs after completion.

// Chaining Promises avoids callback hell.

// Promise.all() runs multiple promises in parallel.

// Async/Await provides a more readable alternative.


