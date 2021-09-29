// Reference Node's FileSystem module to read text files
let fs = require('fs');

// Read food.txt Asynchronously
let food = fs.readFile('food.txt', 'utf8', (err, food) => {
    console.log(food);
    console.log()
});

console.log('We ate this stuff');
console.log()

// Repeat for drink.txt
let drinks = fs.readFile('drink.txt', 'utf8', (err, drink) => {
    console.log(drink);
    console.log()
});

console.log('We Drank this stuff')
console.log()