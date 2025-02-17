// Sync vs. Wait in Asynchronous Programming

// When working with asynchronous programming, it's important to understand how synchronous (sync) and asynchronous (async) execution behave and how waiting (e.g., await in JavaScript or asyncio in Python) works.


// ---

// 1. Synchronous vs. Asynchronous Execution

// Synchronous Execution (Sync)

// Blocking: Code executes line by line, waiting for each operation to complete before moving to the next.

// Single-threaded: The program does not proceed until the current task finishes.


// Example (JavaScript Sync Code)

// console.log("Start");

// function syncTask() {
//     for (let i = 0; i < 1e9; i++) {} // Simulating a time-consuming task
//     console.log("Task Completed");
// }

// syncTask();
// console.log("End");

// Output:

// Start
// Task Completed
// End

// The entire script blocks execution until syncTask() finishes.


// ---

// Asynchronous Execution (Async)

// Non-blocking: The program does not wait for tasks to complete before moving on.

// Concurrent execution: The program continues running other tasks while waiting for an operation to finish.


// Example (JavaScript Async Code)

// console.log("Start");

// setTimeout(() => {
//     console.log("Async Task Completed");
// }, 2000); // Runs after 2 seconds

// console.log("End");

// Output:

// Start
// End
// Async Task Completed

// The setTimeout() function is non-blocking, allowing "End" to be printed before the task completes.


// ---

// 2. Using await to Wait for Async Tasks

// The await keyword is used inside an async function to pause execution until an asynchronous operation completes.

// Example: Using await in JavaScript

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function asyncTask() {
//     console.log("Start");

//     await delay(2000); // Wait for 2 seconds

//     console.log("Async Task Completed");
// }

// asyncTask();
// console.log("End");

// Output (after 2 seconds):

// Start
// End
// Async Task Completed

// Even though await delay(2000) pauses execution of asyncTask(), the rest of the program (console.log("End")) continues running.


// ---

// 3. Sync vs. Wait in Asynchronous Programming


// ---

// 4. Combining Async and Wait (async/await)

// async/await is built on Promises, making asynchronous code easier to read.

// Example: Fetching Data with await

// async function fetchData() {
//     console.log("Fetching data...");

//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data = await response.json();

//     console.log("Data received:", data);
// }

// fetchData();
// console.log("Request sent...");

// Output (non-blocking execution):

// Fetching data...
// Request sent...
// Data received: { userId: 1, id: 1, title: "...", completed: false }

// Even though fetchData() waits for the response, "Request sent..." is printed first.


// ---

// 5. Waiting for Multiple Async Tasks

// Using Promise.all() (Parallel Execution)

// To run multiple asynchronous tasks in parallel, use Promise.all().

// async function parallelTasks() {
//     let [result1, result2] = await Promise.all([
//         delay(2000).then(() => "Task 1 done"),
//         delay(3000).then(() => "Task 2 done")
//     ]);

//     console.log(result1, result2);
// }

// parallelTasks();

// This executes both tasks concurrently and waits for the longest one.


// ---

// 6. Key Takeaways

// Sync code blocks execution and waits for each operation to complete.

// Async code continues execution while waiting for operations to complete.

// await pauses execution inside an async function but does not block the entire program.

// Use Promise.all() for parallel execution when waiting for multiple asynchronous tasks.


// The await function also functions or performs as the promise function. //