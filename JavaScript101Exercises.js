// Exercise 1: Instructions
// Hello, you!
// Write a function hello which given a name, says hello to the name. Use the following template:
// function hello(name) {
//   // put your code here
// }
// hello('Mustache');
// Make the above program print
// Hello, Mustache!

// Exercise 1: Code
function hello(name) {
    console.log("Hello" + name + "!");
}

// Exercise 2: Instructions
// Hello, you! Part 2
// Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.
// Exercise 2: Code
function hello(name) {
    if (name == undefined) {
        console.log("Hello World");
    }
    else {
        console.log("Hello " + name);
    }
}

// Exercise 3: Instructions
// Madlib
// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).
// Example:
// > madlib('Anushka', 'art');
// 'Anushka's favorite subject in school is art.'
// Exercise 3: Code
var madlib = function(name, subject) {
    msg = (name + "'s favorite subject in school is " + subject + ".");
    return msg;
};

// Exercise 4: Instructions
// Tip Calculator
// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
// good -> 20%
// fair -> 15%
// bad -> 10%
// > tipAmount(100, 'good')
// 20
// > tipAmount(40, 'fair')
// 6
// Exercise 4: Code
var tipAmount = function(amount, service) {
    if (service == "good") {
        return (amount * .2);
    }
    else if (service == "fair") {
        return (amount * .15);
    }
    else if (service == "bad") {
        return (amount * .10);
    }
};

// Exercise 5: Instructions
// Tip Calculator 2
// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.> totalAmount(100, 'good')
// 120
// > totalAmount(40, 'fair')
// 46
// Exercise 5: Code
var totalAmount = function(amount, service) {
    if (service == "good") {
        return (amount * 1.2);
    }
    else if (service == "fair") {
        return (amount * 1.15);
    }
    else if (service == "bad") {
        return (amount * 1.10);
    }
};

// Exercise 6 Instructions
// Tip Calculator 3
// Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.
// > splitAmount(100, 'good', 5)
// 24
// > splitAmount(40, 'fair', 2)
// 23
// Exercise 6 Code
var splitAmount = function(amount, service, people) {
    if (service == "good") {
        return (amount * 1.2 / people);
    }
    else if (service == "fair") {
        return (amount * 1.15 / people);
    }
    else if (service == "bad") {
        return (amount * 1.10 / people);
    }
};
