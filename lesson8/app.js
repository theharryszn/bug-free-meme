// // Classes

// // const lexus = {
// //     name: "Lexus",
// //     model: "C350",
// //     price: "$50000",
// //     year: 2056,
// //     mode: "automatic",
// //     color: "black",
// //     type: "SUV"
// // }

// // const benz = {
// //     name: "Mercedes Benz",
// //     model: "C300",
// //     price: "$90,000",
// //     year: 3024,
// //     mode: "automatic",
// //     color: "white",
// //     type: "Sedan"
// // }

// class Vehicle {
//     name = "Unknown";
//     model = "Unknown";
//     price = "Unknown";
//     year = 0;
//     mode = "Unknown";
//     color = "black";
//     type = "car";

//     isMoving = false;

//     drive() {
//         if (this.isMoving == true) {
//             console.log(`${this.name} is already moving`);
//         } else {
//             this.isMoving = true;
//             console.log(`${this.name} is now moving`);

//         }

//     }

//     brake() {
//         if (this.isMoving == true) {
//             this.isMoving = false
//             console.log(`${this.name} is stopping`)
//         } else {
//             console.log(`Initially ${this.name} was not moving`);
//         }
//     }

//     constructor(name, model, price, year, mode, color, type ) {
//         this.name = name;
//         this.model = model;
//         this.price = price;
//         this.year = year;
//         this.mode = mode;
//         this.color = color;
//         this.type = type;
//     }
// }


// const mazda = new Vehicle("Mazda Pro", "R20", "$3000", 2012, "automatic", "green","car");
// // mazda.name = "Mazda Pro"
// console.log(mazda.name);
// console.log(mazda.color);

// const lexus = new Vehicle("Lexus", "C350", "$10000", 2056, "automatic", "black", "suv");

// lexus.brake()
// lexus.drive()
// lexus.brake()

// // const accord = new Vehicle();
// // accord.price = "$20000"
// // accord.drive()
// // console.log(accord.price);
// // mazda.name


class Mammal {
    name = "";
    age = 0;
    gender = ""
    habitat = ""

    eat() {
        console.log("Eating");
    }

    constructor(name, age, gender, habitat) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.habitat = habitat;
    }
}

class Human extends Mammal {
    job = ""

    talk() {
        console.log("talking");
    }

    constructor(name, age, gender,job) {
        super(name, age, gender, "terrestial")
        this.job = job
    }
}

class Dog extends Mammal {

    bark() {
        console.log("Barking");
    }

    furColor = ""

    constructor(name, age, gender, furColor) {
        super(name, age, gender, "terrestial")
        this.furColor = furColor;
    }
}

const malik = new Human("Malik", 22, "male", "Driver");

console.log(malik.name);


const daniel = new Dog()