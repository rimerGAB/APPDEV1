let score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Even:", i);
  }
}

let day = 1;

while (day <= 5) {
  console.log("Day " + day + ": Present");
  day++;
}