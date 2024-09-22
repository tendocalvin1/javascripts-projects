// 1. deposit some money
// 2. Determine the number of lines to bet on
// 3. Determine the amount to bet on each line
// 4. Spin the slot machine
// 5. Check if the user won
// 6. If the user won, give them their winnings
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A":2,
    "B":4,
    "C":6,
    "D":8,
}

const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2,
}



const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount); // this line is going to take a string and convert it to a float value
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid amount deposited, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumberofLines = () => {
    while (true) {
        const numberOfLines = prompt("Enter the number of lines you want to bet on (1-4): ");
        const numberOfLinesParsed = parseFloat(numberOfLines);
        if (isNaN(numberOfLinesParsed) || numberOfLinesParsed <= 0 || numberOfLinesParsed > 4) {
            console.log("Invalid number of lines, try again.");
        } else {
            return numberOfLinesParsed;
        }
    }
};

const getBetAmount = (balance, lines) => {
    while (true) {
        const betAmount = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(betAmount);
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.");
        } else {
            return numberBet;
        }
    }
};

let balance = deposit();
const numberOfLines = getNumberofLines();
const betAmount = getBetAmount(balance, numberOfLines);

//console.log(`Deposit Amount: ${balance}`);
//console.log(`Number of Lines: ${numberOfLines}`);
//console.log(`Bet Amount: ${betAmount}`);

const spin = ()=>{
    const symbols =[];
    for (const[symbol,count] of Object.entries(SYMBOLS_COUNT)){ // for loop
        console.log(symbol,count);
        for(let i = 0; i < count;i++){
            symbols.push(symbol);
        }
    }
    console.log(symbols);
    const reels = [[],[],[]];
    for (let i=0; i < COLS;i++){
        const reelsymbols = [...symbols];
        for(let j=0;j<ROWS;j++){

        }
    }
}
spin();
