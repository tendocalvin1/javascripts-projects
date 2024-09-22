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

// writing a function to find the initial deposit for the slot machine
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

// writing a function to determine the number of lines a gambler wants to bet on. //
const getNumberofLines = ()=>{
    const numberOfLines = prompt("Enter the number of lines you want to bet on(1-4): ")
    const NumberOfLines = parseFloat(numberOfLines);
    if (isNaN(numberOfLines)||numberOfLines <=0 || numberOfLines > 3) {
        console.log("invalid number of lines,try again.")
}else{
    return numberOfLines;
}

    }
const numberOfLines = getNumberofLines();

// collect the bet amount
const getBetAmount = (balance) =>{
    while(true){
        const betAmount = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);
        if (isNaN(numberBet)||numberBet <= 0 || numberBet > balance / lines){
            console.log("Invalid bet, try again later");
        }else{
            return numberBet;
        }

    }
}

let balance = deposit();
const betAmount = getBetAmount(balance);