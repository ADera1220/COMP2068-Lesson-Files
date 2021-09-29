// Reference Node's FileSystem library to read the text files
let fs = require('fs');

// Read the contents of food.txt Synchronously
let food = fs.readFileSync('food.txt', 'utf8');

// Display the contents of the food variable
console.log(food);
console.log('We ate this stuff');
console.log();

// Repeat this process for drinks
let drinks = fs.readFileSync('drink.txt', 'utf8');
console.log(drinks);
console.log('We drank this stuff');