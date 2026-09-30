function loadAttendance(callback) {
  setTimeout(() => {
    callback("Attendance data loaded");
  }, 1000);
}

loadAttendance((message) => {
  console.log(message);
});

function getStudent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Gabster");
    }, 1000);
  });
}

getStudent().then((student) => {
  console.log("Student:", student);
});

async function showCourse() {
  const student = await getStudent();
  console.log("Course for " + student + ": BSIS");
}

showCourse();