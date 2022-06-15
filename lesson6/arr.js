const scores = [20, 30, 40, 50, 60, 70];

scores.forEach((v, i, arr) => {
    console.log(`${i}. ${v}`);
})

let newScores = scores.map((v) => {
    return v + 10
})

console.log(newScores);

let sum = scores.reduce((a, b) => {
    return a + b;
})

let filtered = scores.some((v) => v > 40);

console.log(filtered);

console.log(sum);