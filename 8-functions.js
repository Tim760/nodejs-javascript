'use strict';

function greet(name, day) {
    console.log('Hello', name, 'today is', day);
    }

    greet('Tim', 'Saturday');


// Alternative version
 const greet2 = (name, day) => {
    console.log('Hello', name, 'today is', day);
    }

    greet2('Michael', 'Monday');
    console.log();

// Return functions
function square(number) {
    return number * number;
}

console.log("The value squared is " + square(5) + "\n");

// Factorial & toString
function factorial(value) {
    
// The function of factorials in mathematics is to multiply a value with every
// previous integer of that value until descended to the lowest integer multiplyer of 1.
// E.g. 5! = 5*4*3*2*1, 3! = 3*2*1, etc... 1! = 1*1 because it is already at 1. 

var factorial = value;
let reference = factorial;

if (value == 0) {
    factorial = 1;
    process.stdout.write("The value of " + value.toString() + "! = ");
}

else if (value == 1) {
    factorial = value;
    process.stdout.write("The value of " + value.toString() + "! = ");
}

else if (value == -1) {
    factorial = value;
    process.stdout.write("The value of " + value.toString() + "! = ");
}

// The factorial value is instantiated with the 'value' argument/parameter declared in the factorial function as declared in line 25
else if (value < 0) {
    console.log(factorial + "!");
        // Iterate through every descending integer multiple of the factorial value, so starting at 'value - 1' and ending after n=1
        for (let n = (-1 * value) - 1; n >= 1; n--) {
            //The factorial variable is updated or reassigned with the value of the multiplication of each descending integer 'n'.
            factorial = factorial * n;
            process.stdout.write("Multiplyer = " + n.toString() + ", so: " + reference + " * " + n.toString() + " = " + factorial + "\n");
            reference = factorial;
    }
    process.stdout.write("The value of " + value.toString() + "! = ");
}

// The factorial value is instantiated with the 'value' argument/parameter declared in the factorial function as declared in line 25
else {
    console.log(factorial + "!");
        // Iterate through every descending integer multiple of the factorial value, so starting at 'value - 1' and ending after n=1
        for (let n = value - 1; n >= 1; n--) {
            //The factorial variable is updated or reassigned with the value of the multiplication of each descending integer 'n'.
            factorial = factorial * n;
            process.stdout.write("Multiplyer = " + n.toString() + ", so: " + reference + " * " + n.toString() + " = " + factorial + "\n");
            reference = factorial;
    }
    process.stdout.write("The value of " + value.toString() + "! = ");
}
   
    return factorial;
}
     
// console.log(factorial(1));

let i = -4;
let length = 7;

do {
    console.log(factorial(i) + "\n");
    i++;
} while (i <= length);