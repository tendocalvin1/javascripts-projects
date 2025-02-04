function sum(numbers){
        let sum = 0;
        for(let i = 0; i < numbers.length;i++){
            sum += numbers[i];   
        }
        return sum

}
const result = sum([1,3]);
console.log("The sum of the two numbers is:", result);


function divide(numbers){
        let sum = 0;
        for (let i=0; i < numbers.length;i++){
            sum += numbers[i];
        }
        let result = sum / numbers.length;
        return result;
}
const answer = divide([4,2]);
console.log("The result of the division is:",answer);
// In the above example, I have created a function divide which adds the 2 elements in an array and then from the sum, it divides the sum of the arrays the the number of elements in the array.//

function division(numbers){
    if(numbers.length < 2){
        return "Error: Not enough numbers to divide.";
    }
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        result  /= numbers[i];
    }
    return result;
}

const answer1 = division([4,2]);
console.log("The result of the division is:", answer1);


// string manipulation.//
function CapitalizeFirstLetters(string) {
    let words = string.split(' '); // Split the string into an array of words
    let result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // Capitalize each word
    return result.join(' '); // Join the words back into a single string
}

const example = CapitalizeFirstLetters("david james");
console.log("Final string manipulation is:", example); // Output: "David James"
// Here, the map function iterates over each word in the array. It converts the first character of each word to uppercase using word.charAt(0).toUpperCase(), and concatenates it with the rest of the word using word.slice(1).//
// The join function is then used to combine the words back into a single string.//
// The result is a string where the first letter of each word is capitalized.//
// The map function is a powerful tool for transforming arrays in JavaScript. It allows you to perform operations


//returning even numbers.//
function EvenNumbers(){
    let numbers = [3,4,5,6,7,8,9,10];
    let even_numbers = numbers.filter(number => number % 2 === 0);
    return even_numbers 
}
const numbers = EvenNumbers();
console.log("The even numbers are:", numbers);