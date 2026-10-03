function greet(name) {
  return "Hey there, " + name + "!";
}

const square = (num) => {
  return num * num;
};

function calculator(a, b) {
  return { sum: a + b, difference: a - b, product: a * b };
}

console.log(greet("Gab"));
console.log(square(9));
console.log(calculator(15, 4));