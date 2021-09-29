// Create a parent or "wrapper" function that contains a variable
function parent() {
    let message = 'Hello from parent';

    function child() {
        console.log(message);
    }

    //execute the child function
    child();
}

//execute the parent function
parent();