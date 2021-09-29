// Create closed (closure) function for a counter
function closedFunction() {
    let counter = 0;

    let increment = () => {
        counter++;
        console.log(counter);
    }

    return increment;
}

// Assign the increment function to a variable, does not execute
let counterFunction = closedFunction();

// Execute three times
counterFunction();
counterFunction();
counterFunction();