// function reject() {
//     return new Promise((res, rej) => {
//         rej("Rejected")
//     })
// }

// // (async () => {

// //     try {
// //         await reject()
// //     } catch (err) {
// //         console.log(err);
// //     }

// // })()

// try {
//     let age = 20
//     // console.log(age.toLowerCase());
// } catch (err) {
//     console.log("Error was caught");
// } finally {
//     console.log("Finally Block ran");
// }

const ADMIN = {
    name: "admin",
    password: "adminpass"
}

function validate(name, password) {
    if (name !== ADMIN.name) {
        throw "Incorrect name"
    }

    if (password !== ADMIN.password) {
        throw "Incorrect Password"
    }

    console.log("Logged in as admin");
}

// const name = prompt("Enter name");
// const password = prompt("Enter password");

// let age = 20
// age.toLowerCase()

// throw "Error occured"
const err = new Error("")

console.log(err.message)

class AuthenticationError extends Error {
    constructor(message) {
        super(message)
        this.name = "Authentication Error"

        console.log("Please enter correct details");
    }
}

// try {
//     throw new AuthenticationError("Password is incorrect")
// } catch (err) {
//     console.log(err.stack);
// }

class DivisonByZeroError extends Error {
    constructor() {
        super("Cannot divide by Zero")
        this.name = "DivisonByZeroError"
    }
}

function divide(a, b) {
    if (b === 0) {
        throw new DivisonByZeroError()
    }
} 

divide(290, 0);

