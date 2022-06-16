const person = {
  name: "Andrew Candima",
  age: 25,
  gender: "male",
  height: 186,
  weight: 60,
  skinColor: "green",
  planet: "Venus",
  hobbies: ["Hunting", "Killing", "Cashing Out"],
  job: "Bounty Hunter",
  talk() {
    console.log("Talking");
  },
  kill(name) {
    console.log(`Killing ${name}`);
  },
  changeName(name) {
    this.name = name;
  }
};

console.log(person.name);
person.talk();
person.kill("Wisdom");
person.changeName("Andrew Liver Salt");
console.log(person.name);

for (let prop in person) {
  console.log(person[prop]);
}
