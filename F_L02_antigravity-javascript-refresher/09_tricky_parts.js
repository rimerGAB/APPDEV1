// --- Equality ---
console.log("5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);

// --- undefined vs null ---
let notDefined;
let empty = null;

console.log("notDefined:", notDefined, "| typeof:", typeof notDefined);
console.log("empty:", empty, "| typeof:", typeof empty);

// --- this in methods ---
const profile = {
  name: "Gabster",
  regularMethod: function () {
    console.log("regular this.name:", this.name);
  },
  arrowMethod: () => {
    console.log("arrow this.name:", this.name);
  },
};

profile.regularMethod();
profile.arrowMethod();

// --- Array copying ---
const original = ["gaming", "coding", "design"];

const copyByReference = original;
copyByReference.push("editing");

console.log("original after reference push:", original);
console.log("copyByReference:", copyByReference);

const copyBySpread = [...original];
copyBySpread.push("video editing");

console.log("original after spread push:", original);
console.log("copyBySpread:", copyBySpread);