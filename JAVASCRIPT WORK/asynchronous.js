// ASYNCHRONOUS PROGRAMMING AND SYNCHRONOUS PROGRAMMING. //

// SYNCHRONOUS PROGRAMMING executes code line by line. //
// ASYNCHRONOUS PROGRAMMING executes code in parallel. //

console.log("Put water to boil.");
console.log("Water is boiling.");
console.log("The water is ready.");

setTimeout(() =>{
    console.log("The water is ready!");
}, 5000);

console.log("Doing other things...");