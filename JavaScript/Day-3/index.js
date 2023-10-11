//ARRAYS
/*
let coffeeOrder = [
    "James - Americano",
    "Hanna - Latte",
    "Alex - Capucino",
]

//Log the entire Array in the console.
console.log(coffeeOrder);

//In the contex of an Array, the lengh property represents the number of items.

console.log(coffeeOrder.length);


//Log individual items to the console.
console.log(coffeeOrder[0]);
console.log(coffeeOrder[1]);
console.log(coffeeOrder[2]);

//Add items to an Array via the idex:

coffeeOrder[1] = "Hanna - Tea";
console.log(coffeeOrder[1]);

coffeeOrder[3] = "Christian - water";
console.log(coffeeOrder);


//Array Methods

//.pop method - Removes the last item from the array

coffeeOrder.pop();
console.log(coffeeOrder);


//.push Method add an item to the end of an array

coffeeOrder.push("Christian - Apple Juice");
console.log(coffeeOrder);

 console.table

console.table(coffeeOrder);

//LOOPS
let colors = [
    "Blue",
    "Red",
    "Pink",
    "Green",
    "Purple",
    "Yellow",

]
console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);
console.log(colors[5]);


//Increment operator = ++ Where the ++ is located it'll determine the value
//If you put it befoer it'll increment the value
//If you put it after it'll keep the original value
let a = 1;
console.log(a);

let b = a++
console.log(b);
console.log(a);

//For Loops
//for(let i initiasatonExpression or index or counter)

/for (let i = 0; i< colors.length; i++){
console.log(`index value is currently ${1}`);

}

for (let i = 0; 1 < colors.length; i++) {
    console.log(colors[i]);
}


//WHILE LOOPS
// let number =0;
//while(nmber <10){
//console.log(number);
//number++
//}



let cards = ["Diamond", "Heart", "Club", "Spade"];

let currentCard = "";


while (currentCard !== "Spade") {

    currentCard = cards[Math.floor(Math.random() * 4)];

    console.log(currentCard);

}


console.log("!!! GAME OVER !!!");





//while LOOP

let num = 1;

do {

    console.Log(num);
    while(num<1);

}



//BREAK keyword in loop

for (let i =1; 1<=5; 1++){
    if (i ===3){
        break
    }
    console.log(i);
}

//For loop -Array


*/



//Tasks: 

//1: Create an array of your favourite Films / TV shows, up to 5 items.
// Use an array method to add 2 more items to your array. 
//Use a loop to cycle through the array and log each item to the console.

//A printed array items
let favoriteFilms = [
    "Lost in Translation",
    "ET",
    "Rambo",
    "The Jungle Book",
    "Fame",
];

favoriteFilms.push("Bo is Afraid", "Ninja");

for (let i = 0; i < favoriteFilms.length; i++) {
    console.log(`favoriteFilms ${i + 1}: ${favoriteFilms[i]}`);
}



//B printed array items looped randomly 
let myFilms = [
    "Lost in Translation",
    "ET",
    "Rambo",
    "The Jungle Book",
    "Fame",
    "Bo is Afraid",
    "Ninja"
];

// Shuffle the array using the Fisher-Yates shuffle algorithm
for (let i = myFilms.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [myFilms[i], myFilms[j]] = [myFilms[j], myFilms[i]];
}

// Print the shuffled array
for (let i = 0; i < myFilms.length; i++) {
    console.log(`myFilms ${i + 1}: ${myFilms[i]}`);
}




//2: Write a loop to generate 10 random numbers between 1-100 and log them to the console.


for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Random Number ${i + 1}: ${randomNumber}`);
}



//3: Write a loop that counts backwards from 20-0, logging each number to the console.

for (let i = 20; i >= 0; i--) {
    console.log(i);
}



//4: Generate 5 random numbers between 1-50. 
//For each number generated, check if the number is divisible by 5 or not.
// Log whether it is divisible or not to the console.

for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    const isDivisibleBy5 = randomNumber % 5 === 0;

    console.log(`Random Number ${i + 1}: ${randomNumber} is divisible by 5: ${isDivisibleBy5}`);
}









