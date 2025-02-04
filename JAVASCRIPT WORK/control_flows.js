// comparison operators.//
let number1 = 14;
let number2 = 10;

const isnumber1GreaterOrEqualTo = number1 >= number2; 
console.log( isnumber1GreaterOrEqualTo);

const isnumber1LessThan = number1 < number2; 
console.log( isnumber1LessThan);

const isnumber1LessThanOrEqualTo = number1 <= number2; 
console.log( isnumber1LessThanOrEqualTo);


const isnumber1GreaterThan = number1 > number2; 
console.log( isnumber1GreaterThan);

// Equality operators //
let a = 2;
let b = '2';
console.log(a == b); // truthy, this is so because == sees that the numbers are the same.

console.log(a === b); // this is false coz its comparing two data types that is an integer and a string.
// loose equality, == .

// syntax //
// const result = 'test' === 'test'? true:false;
// console.log(result); // true

let age = 16;
const carDrive = age >= 16 ? true : false;
console.log(carDrive);

let points = 110;
const customerType = points > 100 ? 'gold' : 'silver';
console.log(customerType);

// Types of operators in Javascript languange. //
// 1. || (or operator)
// 2. && (and operator)
// 3. ! (not operator)
// 4. ? : (conditional operator)
// 5. == (equality operator)
// 6. === (strict equality operator)
// 7. != (inequality operator)
// 8. !== (strict inequality operator)
// 9. ?? (null coalescing)




