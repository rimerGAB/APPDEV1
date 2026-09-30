const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

const user = {
  name: "Gabster",
  age: 21
};

const newUser = {
  ...user,
  course: "BSIS"
};

console.log(newUser);

function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}

console.log(sum(10, 20, 30, 40));