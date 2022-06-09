// Decision Making

// if statement
// if - else statement 
// if - else - if
// nested if
// switch statment

let age = 6;
let isRaining = false

// if (isRaining)
// {
//     console.log("Take your umbrella");
// } else {
//     console.log("Enjoy the sunshine");
// }

// let score = 80;

// if (score >= 75) {
//     console.log("Outstanding");
// } else if (score >= 65) {
//     console.log("Very Good");
// } else if (score >= 40) {
//     console.log("Goood");
// } else {
//     console.log("You failed");
// }

// let years = parseInt(prompt("How many years have you been buying from us?"))
// let amountOfStuffs = parseInt(prompt("How much goods have you bought?"));

// // first condition
// if (years >= 5) {
//     // second condition
//     if (amountOfStuffs >= 100000) {
//         console.log("You've been awarded a discount of 50%");
//     } else {
//         console.log("you're our old customer, but please keep buying");
//     }
// } else {
//     console.log("Just keep buying");
// }

// const month = parseInt(prompt("Enter a number between 1 - 12"));

// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Mar");
//         break;
//     default:
//         console.log("Invalid month");
// }

// if(number % 2 == 0) {
//     console.log("Even number");
// } else {
//     console.log("Not an even number");
// }
const month = parseInt(prompt("Enter a number"));

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days");
        break;
    case 2:
        console.log("28/29 days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days");
        break;
    default:
        console.log("Invalid month");
        break;
}