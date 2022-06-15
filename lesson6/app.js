// // Functions

// function sayHello(name, age) {
//     console.log(`Hello ${name}, you're ${age} year(s) old`);
// }

// sayHello("James", 20)
// sayHello("Linux", 90)

// // Normal Function
// function add(a, b) {
//     return a + b;
// }

// function square(num) {
//     return num * num;
// }

// // Arrow Functions
// const sub = (a, b) => {
//     return a - b;
// }

// let sum = add(20, 40)
// let sq = square(sum)
// console.log(sq);

// // console.log(sum);
// add(100, -10)
// square(9)


function getLength(arr) {
    return arr.length
}

const len = getLength([2, 4, 5, 7]);

console.log(len);

const add = (a, b) => {
    return a + b;
}

function doSomething(func, a, b) {
    return func(a, b);
}

const res = doSomething(add, 2, 3);

// console.log(res);

// Callbacks

const scores = [20, 30, 40, 50, 60, 70];

function calcMean(arr, callback) {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }

    let mean = sum / arr.length;

    callback(mean)
}

calcMean(scores, (avg) => {
    console.log(avg);
})


