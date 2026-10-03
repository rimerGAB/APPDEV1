const students = [
  { name: "Gabster", grade: 92 },
  { name: "Winston", grade: 78 },
  { name: "Daniel", grade: 88 },
  { name: "Brenan", grade: 65 }
];

const passingStudents = students.filter(student => student.grade >= 60);
console.log(passingStudents);

const foundStudent = students.find(student => student.name === "Jessa");
console.log(foundStudent);

const someoneFailed = students.some(student => student.grade < 60);
console.log(someoneFailed);

const everyonePassed = students.every(student => student.grade >= 60);
console.log(everyonePassed);

const sortedStudents = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedStudents);