// // Arrays and Array Methods

// // Each array item rep a students mark in Maths, Physics, Chem
// const students = [[50, 70, 85], [65, 40, 70], [90, 75, 60], [85, 59, 90], [83, 57, 48]];


// for (let stud of students) {
//     let pM = (stud[0] / 100) * 100;
//     let pP = (stud[1] / 100) * 100;
//     let pC = (stud[2] / 100) * 100;

//     let overallP = ((stud[0] + stud[1] + stud[2]) / 300) * 100;

//     console.log(`
//         Maths : ${pM}%,
//         Physics : ${pP}%,
//         Chemistry : ${pC}%

//         Overall percentage : ${overallP}%
//     `);


//     // let name = "James"
//     // // console.log("Hello " + name); // Hello James
//     // console.log(`Hello ${name}`); // Hello James
// }

// Arrays

const ages = [40, 34, 20, 15];
const countries = ["Japan", "Switzerland", "Ghana", "Nigeria", "Togo", "China", "Brazil", "Australia", "Hungary"]

const empty = [];

empty.push("James", "Bond", "Grandeur", "Peter Parker", "Tony Stark", "Clark Kent")

// empty[2] = "Wisdom"
// empty[4] = "Michael"

// empty.push("Bruce Wayne")

// // let last = empty.pop()

// delete empty[6]

// let last = empty.pop()

// empty.pop()

// console.log(last);

// empty.shift();

// empty.unshift("James", "Daniel")

// const joined = empty.concat(countries);

// console.log(empty); 
// console.log(countries);
// console.log(joined);

const keys = countries.keys()

for (item in countries) {
    console.log(keys.next()); 
}

console.log(keys.next())
console.log(keys.next())


