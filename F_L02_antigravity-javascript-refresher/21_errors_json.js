function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  console.log(divide(20, 0));
} catch (error) {
  console.log("Something went wrong:", error.message);
}

const student = {
  name: "Gabster",
  age: 21,
  course: "BSIS"
};

const jsonData = JSON.stringify(student);
console.log(jsonData);

const parsedStudent = JSON.parse(jsonData);
console.log(parsedStudent);