// // Events

// let num = document.getElementById("num")

// function add() {
//     num.innerHTML = parseInt(num.innerHTML) + 1    
// }

// function sub() {
//     num.innerHTML = parseInt(num.innerHTML) - 1
// }


const h1 = document.createElement("h1");

function run(event) {
    event.target.style.backgroundColor = "red"
}

h1.innerHTML = "Hello World"

// // Option 1
// h1.onclick = run

// Option 2
h1.addEventListener("click", run) 

 

document.body.appendChild(h1)
