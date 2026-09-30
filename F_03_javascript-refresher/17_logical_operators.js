const values = [0, "", "hello", null, undefined, [], {}];

values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});

const username = "gabster";
const password = "bsis2026";

const canLogIn = username !== "" && password !== "";

console.log(canLogIn);

const isAdmin = false;
const isSubscriber = true;

const canWatch = isAdmin || isSubscriber;

console.log(canWatch);
console.log("" || "default");
console.log(username && "Welcome!");
console.log(!canLogIn);