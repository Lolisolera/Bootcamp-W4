
//WE COULD USE EITHER let OR const

//Passing new value to variables by referencing the variable name: We can't do it writing "let", but yes, just reassigning the vLUES. SEE BELOW:

let breakfast = "toast";
let lunch = "pasta";
let dinner = "pizza";

console.log(`Yesterday I had ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);


//TUESDAY 10/10/2023

//Double equals checks if the values either side of it are equal

//Conditions in javascript:

//If /Else
let weather = "rain";

//Is the value of the wheather variable equal to the string of sunny.

console.log(weather === "sunny");

if (weather === "sunny") {
    console.log("Bring your sunglasses!");
} else if (weather === "rain") {
    console.log("Grab an umbrella");
} else if (weather === "snow") {
    console.log("It's snowing");
} else {
    console.log("I'm not sure, maybe bring a jacket");
}

//Comparison operators

//=== checks the value and the date type, e.g. "10" and 10 are the same.
let a = "10"
console.log(a == 10); //TRUE
console.log(a === 10); //FALSE

//!==  Not equal to

//|| pipe symbol means 'or'

//&& AND

// > Greater than

// <  Lesser than

// >=  Greater than or equal to

// <=  Lesser than or equal to



let num = 10;

if (num > 5 && num <= 10) {
    console.log(`${num}is between 5 and 10`);
} else {
    console.log(`${num}is NOT between 5 and 10`);
}


//Traffic light example
let trafficLight = "Red";

//If traffic light is on red or amber log "stop" in the console.
if (trafficLight === "Red" || trafficLight === "Amber") {
    console.log("Stop!");
} else {
    console.log("Go!");
}

//If traffic light is on "Green" log "Go!" in the console. Choose the above way of solving the problem or this one below, either will work, but not bot! These 2 are just 2 examples).
if (trafficLight === "Green") {
    console.log("Go!");
} else {
    console.log("Stop!");
}



//Switch Statement:

let day = "Friday"

switch (day) {
    case "Monday":
        console.log("weekend is over. Happy Monday!");
        break;
    case "Tuesday":
        console.log("Second day of the week!");
        break;
    case "Wednesday":
        console.log("Halfway through the week!");
        break;
    case "Thursday":
        console.log("It's almost the weekend!");

    case "Friday":
        console.log("It's already Friday!");
        break;
    default:
        console.log("It's the weekend!");

}


// Switch Statement 2 - Grade Example

let testScore = 80;

switch (true) {
    case testScore >= 70:
        console.log("Distinction");
        break;
    case testScore >= 60:
        console.log("Merit");
        break;
    case testScore >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}



// END OF TUEDAY TASKS:

//1: Write a conditional check that checks whether a customer is old enough to be served alcohol at a bar. Declare a variable called age and write an if statement that checks whether age is 18 or above. If age is less than 18 log "Sorry, I can't serve you" to the console, if age is 18 or above log "No problem, what would you like to drink?"


let age = 21;

if (age >= 18) {
    console.log("No problem, what would you like to drink?");
} else {
    console.log("Sorry, I can't serve you.");
}



////2: Declare a variable called "Password". Write an if statement that checks how many characters are in the password, if the password has more than 8 characters log the password to the console, if the password has less than 8 characters log to the console that the password is too short.


let password = "lalalalalalalala";

if (password.length >= 8) {
    console.log("Password:", password);
} else {
    console.log("The password is too short.");
}



//3: Create a variable that stores a number. Check whether the number is divisible by 3 or 5, if so log "This number is divisible by 3 or 5" to the console. Otherwise log an alternate message to the console.

let number = 30;

if (number % 3 === 0 || number % 5 === 0) {
    console.log("This number is divisible by 3 or 5");
} else {
    console.log("This number is NOT divisible by 3 or 5");
}



//4: Create a variable that stores a number. If the number is divisible by 3, log "fizz" to the console. If the number is divisible by 5 log "buzz" to the console. If the number is divisible by both 3 and 5, log "fizz buzz" to the console. Otherwise log the number to the console.

let n = 15;

if (n % 3 === 0 && n % 5 === 0) {
    console.log("fizz buzz");
} else if (n % 3 === 0) {
    console.log("fizz");
} else if (n % 5 === 0) {
    console.log("buzz");
} else {
    console.log(n);
}






