const score = 85;

const result = score >= 70 ? "Passed" : "Failed";
console.log(result);

const number = 14;

const parity = number % 2 === 0 ? "Even" : "Odd";
console.log(parity);

const student = {
  name: "Gabster",
  profile: {
    course: "BSIS"
  }
};

console.log(student.profile?.course);

const missingCourse = student.profile?.year ?? "Not available";
console.log(missingCourse);