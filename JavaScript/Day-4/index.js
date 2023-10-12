//Functions

/*//Declering a Function:
function greeting() {
    console.log("Hello world")
}

//calling/invoquing the function
greeting();

//user Status Function
let userOnline = false;

function userStatus() {
    if (!userOnline) {
        userOnline = true;
        console.log("user signed-In!");
    } else {
        userOnline = false;
        console.log("user signed-out!");
    }
}

userStatus()

//!online is true, but online is false, so we're switching it to true



//Parameters and Arguments
function add(number1, number2) {
    console.log(number1 + number2);

}
add(10, 20);

//Scope example
const name = "Lydia";
const age = 21;
const city = "San Francisco";

function getPersonInfo() {
    const name = "Sarah";
    const age = 22;

    return '${name} is ${age} and lives in ${city}';

}

getPersonInfo();



//FUNCTIONS that call other functions
function double(num) {
    return num * 2
}

function quadrupe(num) {
    return double(num)
}

*/

//TASKS - THURSDAY 12/10/2023

//1: Write a function that takes in your name as an argument and logs a personalised greeting to you in the console.


function greeting(name) {
    console.log(`Hello, ${name}! Welcome to my world.`);
}

greeting("Lola");


//2: Write a function that takes in a number as an argument and check whether it is odd or even and logs the result to the console.

function checkNumber(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}

// Example usage:
checkNumber(3);
checkNumber(8);


//3. Write a function that replicates the functionality of Cash Machine / ATM. 
//The ATM should have parameters of pin number and withdrawal amount that are compared to variables of account balance and stored pin number. 
//If the pin passed as an argument is correct and the withdrawal amount is less than the account balance, approve the transaction. 
//If the pin is wrong or the withdrawal amount is greater than the account balance, deny the transaction.


function atm(pin, withdrawalAmount) {

    const storedPin = 1357; //example of stored pin
    const accountBalance = 2000; //example of account balance

    // Check if the PIN is correct and the withdrawal amount is within the account balance
    if (pin === storedPin) {
        if (withdrawalAmount <= accountBalance) {
            // Approve the transaction
            console.log(`Transaction approved. You have withdrawn $${withdrawalAmount}. Your new balance is $${accountBalance - withdrawalAmount}.`);
        } else {
            // Withdrawal amount exceeds the account balance
            console.log(`Transaction denied. Insufficient funds.`);
        }
    } else {
        // Incorrect PIN
        console.log(`Transaction denied. Incorrect PIN.`);
    }
}

// Example usage:
atm(1357, 200); // Successful withdrawal
atm(1357, 2100); // Insufficient funds
atm(1356, 300); // Incorrect PIN

//4: Research arrow functions to familiarise yourself with the differences between them and function declarations. I would then like you to write some example arrow functions and convert a function from a declaration to an arrow function. 



//3. Write a function that replicates the functionality of Cash Machine / ATM. 
//The ATM should have parameters of pin number and withdrawal amount that are compared to variables of account balance and stored pin number. 
//If the pin passed as an argument is correct and the withdrawal amount is less than the account balance, approve the transaction. 
//If the pin is wrong or the withdrawal amount is greater than the account balance, deny the transaction.


function atm(pinNumber, withdrawalAmount) {

    const pin = 1357;
    const accontBalance = 2000;

    if (pin === pinNumber) {


        if (withdrawalAmount <= accontBalance) {
            console.log("Transaction approved. Here's your" `${withdrawalAmount}'. "Your current balance is" '${accontBalance}');
        }
    
       

    } else {
        console.log("Incorrect pin number");
    }

}
