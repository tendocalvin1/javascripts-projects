// if statements
/*
if (condition){

}

else if(condition){

}else{

}

*/

teenager = [13,14,15,16,17,18,19];
var age = 30;
if (age >= 13 && age <= 19){
    console.log("You are a teenager");
}
else if (age >= 20 && age <= 29){
    console.log("You are an adult");
}
else{
    console.log("You are neither an adult nor a teenager")
}

// for loop
/*
for (initialization, condition, increment){
        results
        }

*/

// while loop
/*
initialization
while (condition){
        results
        increment
}
*/

// for loop
for (var i = 0; i < 100; i++){
    console.log(i);
}

// for in loop
// for(initialization in storage){
//     results
//}

// for in loop
let fruits = ["grapes","pawpaws","apples"]
for (let i in fruits){
    console.log(i);
}



// for of loop
// for(initialization of storage){
//     results
//}

// for of loop
let fruit = ["grapes","pawpaws","apples"]
for (let i of fruit){
    console.log(i);
}

// switch statement

/*
switch(param){
    case:
    break;

    case:
    break;

    case:
    break;
}

*/

let day = "Thursday"
switch(day){
    case "Monday":
        console.log("Monday is one");
    break;

    case "Tuesday":
        console.log("Tuesday is two");
    break;

    case "Wednesday":
        console.log("Wednesday is three");
    break;

    case "Thursday":
            console.log("Thursday is four");
    break;

    default:
        console.log("No day is selected");
        
}