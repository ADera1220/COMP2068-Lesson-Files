function parent() {
    let message = 'Hello from parent';

    function child() {
        console.log(message);
    }

    // Return the child function instead of executing it
    return child;
}

// Assign a variable to represent the child function (but not execute it yet)
var childFunction = parent();

childFunction(); // Execute the function