console.log(5 == "5");
console.log(5 === "5");

let notDefined;
let empty = null;

console.log(notDefined);
console.log(empty);

const profile = {
  name: "Gabster",
  regularMethod: function () {
    console.log(this.name);
  },
  arrowMethod: () => {
    console.log(this.name);
  },
};

profile.regularMethod();
profile.arrowMethod();

const original = ["gaming", "coding", "design"];

const copyByReference = original;
copyByReference.push("editing");

console.log(original);

const copyBySpread = [...original];
copyBySpread.push("video editing");

console.log(original);
console.log(copyBySpread);