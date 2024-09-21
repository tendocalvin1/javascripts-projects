// 1. deposit some money
// 2. withdraw some money
// 3. collect a bet amount
// 4. place a bet
// 5. collect a bet amount
// 6. spin the slot machine
// 7. check if the user won // give the user their winnings
// 8. play again [slot machine]

//function deposit(){

//}
//deposit()
const prompt = require("prompt-sync")();

const deposit=()=>{
    while (true){
    const depositAmount = prompt("Enter a deposit amount: ")
    const numberDepositAmount = parseFloat(depositAmount);// this line is going to take a string and convert it to a float value
    if (isNaN(numberDepositAmount)||numberDepositAmount <=0) {
        console.log("invalid amount deposited,try again.")
}else{
    return numberDepositAmount;
}

    }
}
deposit();
const depositAmount = deposit();
console.log(depositAmount);
