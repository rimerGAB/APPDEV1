const message = "  JavaScript is fun to learn  ";

console.log(message.trim());

const words = message.trim().split(" ");
console.log(words);

console.log(message.toUpperCase());

console.log(message.includes("JavaScript"));

console.log(message.slice(2, 12));

const name = "Gabster";
const course = "BSIS";

console.log(`My name is ${name} and I study ${course}.`);

const ageText = "21";
const age = parseInt(ageText);

console.log(age);

const average = 91.567;

console.log(average.toFixed(2));

console.log(Number.isNaN(age));
console.log(Number.isNaN("hello"));