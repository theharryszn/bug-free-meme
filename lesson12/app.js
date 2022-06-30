// // Async and Await

// // console.log("Hello World");
// // alert("My name is James Bond")
// // console.log("Yay, it's pride month");

// // function greetAfterTwo() {
// //     setTimeout(() => {
// //         console.log("Hello World");
// //     }, 2000)
// // }

// // function greetAfterTwo() {
// //     return new Promise((res, rej) => {
// //         setTimeout(() => {
// //             res("Hello world");
// //         }, 2000)
// //     })
// // }

// // greetAfterTwo().then((res) => {
// //     console.log(res);
// //     console.log("Hello James");
// // })



// // toast().then((res) => {
// //     console.log(`Yay, she said ${res}`);
// // }).catch((err) => {
// //     console.log(err);
// // })

// // console.log("Hello World");

// function toast() {
//     return new Promise((response, reject) => {
//         setTimeout(() => {
//             response("You're broke, you're black.")
//         }, 2000)
//     })
// }

// async function toast2() {
//     let a;
//     setTimeout(() => {
//         a = "james bond"
//     }, 2000)

//     return a
// }

// async function flow() {
//     return toast()
// }

// flow().then((res) => {
//     console.log(res);
// })


function checkAge(age) {
    return new Promise((res, rej) => {
        if (age >= 18) {
            res("You are fit for the stuff")
        } else {
            rej('You are too young')
        }
    })
}

checkAge(1).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


