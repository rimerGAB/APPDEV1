const hobbies = ["gaming", "coding", "UI design"];

const shout = hobbies.map(hobby => hobby.toUpperCase());
console.log(shout);

const student = {
  name: "Gabster",
  age: 21,
  course: "BSIT"
};

const { name, age, course } = student;

console.log(name, age, course);

const quizScores = [85, 90, 78];
const examScores = [92, 88];

const allScores = [...quizScores, ...examScores];

console.log(allScores);