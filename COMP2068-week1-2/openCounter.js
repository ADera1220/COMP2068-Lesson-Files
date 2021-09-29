// Create open (non-closure) function for a counter
function openFunction() {
    let counter = 0;
    counter++;
    console.log(counter)
}

// Run the function twice
openFunction();
openFunction();