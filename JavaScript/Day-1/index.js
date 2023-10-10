//Properties- Are data or INformation about the object

//Methods - Are things the object can do
//Usisng the console object and the log method to log a statement 
console.log("Hello World!");

//Data Types

//String-Represents characters enclosed in the quote marks
console.log("I am a string");

//Numbers
console.log(100);

//Boolean -True or False
console.log(true);
console.log(false);

//REMEMBER numbers inside quote marks are strings
console.log("1000");

//Null - An absence of any value
console.log(null);

//Undefined - Data without a defined type
console.log(undefined);


//VARIABLES in JavaScript:

//var - variable declaration keyword
//AVOID USING VAR!!

var variable = "var is a method of declaring variables that should be avoid"
// = -Single Equals - Assignmet Operator -used to asign a value


console.log(variable);
//Let - Method for declearing variables that will change
let changeable = "A value sorted in a 'let' variable is able to have its value reassigned"
console.log(changeable);

changeable = "A new value";

console.log(changeable);
console.log(changeable);

//let changeable = "whatever value"

//const - for variable values that won't change

const constant = "A variable that can not be assigned a new value"

console.log(constant);
//We cannot reassigned a contant value
//constant ="New Value"

changeable = 100 + 100;
console.log(changeable);

//Properties and Methods
let exampleString = "Hello World";

console.log(exampleString.length);

//.length -returns the number of characters in a string
console.log(exampleString.length);

//Methods - is something that you executed and must be followed by parenthesis in order to invoque it
console.log(exampleString.toLocaleUpperCase());

//Math Library

//In-buit JavaScript mathematical methods

//Math.random - generates a psuedorandmom number between 0 and 1
console.log(Math.random());

//Multiplying the Math.random result by 10 give us a number between 1-10 still with decimals.

console.log(Math.random() * 10);

//Math.round - rounds the result to a whole number

console.log(Math.round(Math.random() * 10));

//Math.round - rounds up
console.log(Math.ceil(Math.random() * 10));


//Math.round - rounds down
console.log(Math.round(Math.floor() * 10));

//Accessing variables / Template Literals
//let firstName = "Lola"

//let lastName = "Marquez"

//console.log(firstName);
//console.log(lastName);

//console.log("My name is" + firstName + lastName);

//console.log("My name is" + " " + firstName + " " + lastName);

//Template Literals
//console.log(`My name is ${firstName} ${lastName}.`);

//TASK -MONDAY 9/10/2023
//1: Create a variable that stores your name and log a string to the console that personally greets you using template literals.

const firstName = "Lola";
const lastName = "Marquez";
console.log(`Hello,  ${firstName} ${lastName}!`);

//2: Create variables storing your name, your favourite colour and your favourite film or tv series. Using template literals I want you to log a sentence including these values to the console.
let favouriteColor = "Red";
let favouriteFilm = "Lost in Translation";
console.log(`My name is ${firstName}. ${favouriteColor} is my favorite color and ${favouriteFilm} is my favorite film.`);

//3: Create variables storing what you ate for breakfast, lunch and dinner yesterday and log them to the console. Without redeclaring new variables I would like you to assign a new value of what you ate today to the variables, and again log them to the console.
let breakfast = "coffee and cereal";
let lunch = "ham and cheese sandwich";
let dinner = "spagetti bolognaise with a side salad";
console.log(`Yesterday I had ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);
