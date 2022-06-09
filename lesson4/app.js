// Loops

// While loop ;
// Do While loop
// For loop
// for in
// for of


// // let age = 10

// while (true) {
//     console.log("Age incremented");
//     // age--;
// }
// let age = 0

// while (age <= 10) {
//     console.log(age);
//     age++;
// }

// let num = 0

// while (num <= 12) {
//     console.log(num);
//     num += 2;
// }

// let age = 10

// do {
//     console.log(age);
//     age++
// } while(age == 10)

// intialization of controls vars
// condition
// incre / decre


// // outer loop
// for (let i = 1; i <= 10; i++) {
//     // inner loop
//     for (let j = 1; j <= 10; j++){
//         // inner - inner loop
//         for (let k = 1; k <= 10; k++){
//             // inner - inner - inner loop
//             for (let l = 1; l <= 10; l++){
//                 console.log("ran")
//             }
//         }
//     }
// }


// Arrays

let scores = [20, 45, 20, 60, 70, 80]

// console.log(scores[4]);

let names = ["Malik", "Wale", "Daniel", "Reuben", "Ife", "Linux", "Grandeur", "Wisdom", "Michael"]

console.log(names);

// let matrix = [[3, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(matrix);

// console.log(matrix[0][1]);

// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

for (let name of names) {
    console.log(name);
}

// for (let s of scores) {
//     console.log(s);
// }