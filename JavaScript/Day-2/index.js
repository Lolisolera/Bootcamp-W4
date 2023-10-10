
/*
//TASK -MONDAY 9/10/2023

//TEMPLATE LITERALS - SOLUTION:
//1: Create a variable that stores your name and log a string to the console that personally greets you using template literals.

const firstName = "Lola";
const lastName = "Marquez";
console.log(`Hello,  ${firstName} ${lastName}!`);


//2: Create variables storing your name, your favourite colour and your favourite film or tv series. Using template literals I want you to log a sentence including these values to the console.
let favouriteColor = "Red";
let favouriteFilm = "Lost in Translation";
console.log(`My name is ${firstName}. ${favouriteColor} is my favourite color and ${favouriteFilm} is my favourite film.`);

//3: Create variables storing what you ate for breakfast, lunch and dinner yesterday and log them to the console. Without redeclaring new variables I would like you to assign a new value of what you ate today to the variables, and again log them to the console.
let breakfast = "coffee and cereal";
let lunch = "ham and cheese sandwich";
let dinner = "spagetti bolognaise with a side salad";
console.log(`Yesterday I had ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

//WE COULD USE EITHER let OR const

//Passing new value to variables by referencing the variable name: We can't do it writing "let", but yes, just reassigning the vLUES. SEE BELOW:

breakfast = "toast";
lunch = "pasta";
dinner = "pizza";

console.log(`Yesterday I had ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);*/


//TUESDAY 10/10/2023

//Double equals checks if the values either side of it are equal

//Conditions in javascript:

//If /Else
let weather = "rain";

//Is the value of the wheather variable equal to the string of sunny.

//console.log(weather == "sunny");
/*
if (weather == "sunny") {
    console.log("Bring your sunglasses!");
} else if (weather == "rain") {
    console.log("Grab an umbrella");
} else if (weathter == "snow"); {
    console.log("It's snowing");
} else {
    console.log("I'm not sure, maybe bring a jacket");
}*/

//Comparison operators

//=== checks the value and the date type, e.g. "10" and 10 are the same.
/*let a = "10"
console.log(a == 10);
console.log(a === 10);*/

//!==  Not equal to

//|| pipe symbol means 'or'

//&& AND

let num = 10;
if (num > 5 && num <= 10) {
    console.log(`${num}is between 5 and 10`);
} else {
    console.log(`${num}is NOT between 5 and 10`);
}


//Traffic light example
let trafficLight = "Amber";

//If traffic light is on red or amber log "stop" to the console.
if (trafficLight === "Red" || trafficLight === "Amber") {
    console.log("Stop!");
} else {
    console.log("Go!");
}



//Switch Statement

let day = "Wednesday"

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
        console.log("It's almost the week!");

    case "Friday":
        console.log("It's already Friday!");
        break;
    default:
        console.log("It's the weekend!");

}

/* TASKS:
TASKS:

1: Write a conditional check that checks whether a customer is old enough to be served alcohol at a bar. Declare a variable called age and write an if statement that checks whether age is 18 or above. If age is less than 18 log "Sorry, I can't serve you" to the console, if age is 18 or above log "No problem, what would you like to drink?"
 
2: Declare a variable called "Password". Write an if statement that checks how many characters are in the password, if the password has more than 8 characters log the password to the console, if the password has less than 8 characters log to the console that the password is too short.
 
3: Create a variable that stores a number. Check whether the number is divisible by 3 or 5, if so log "This number is divisible by 3 or 5" to the console. Otherwise log an alternate message to the console.
 
4: Create a variable that stores a number. If the number is divisible by 3, log "fizz" to the console. If the number is divisible by 5 log "buzz" to the console. If the number is divisible by both 3 and 5, log "fizz buzz" to the console. Otherwise log the number to the console.*/
