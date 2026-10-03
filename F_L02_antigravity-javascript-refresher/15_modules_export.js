const userInfo = {
  name: "Gabster",
  age: 21
};

function greet() {
  return "Hello from Gabster's module!";
}

export default greet;
export { userInfo };