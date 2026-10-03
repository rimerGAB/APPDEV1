const course = "BSIS";

if (true) {
  const section = "F-03";
  let yearLevel = 3;

  console.log(course);
  console.log(section);
  console.log(yearLevel);
}

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const attendanceCounter = createCounter();
const taskCounter = createCounter();

console.log(attendanceCounter());
console.log(attendanceCounter());
console.log(taskCounter());
console.log(taskCounter());
console.log(attendanceCounter());