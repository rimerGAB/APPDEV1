// --- let: can be reassigned ---
let course = "BSIS";
console.log("course:", course);

course = "Information Systems";
console.log("course updated:", course);

// --- const: cannot be reassigned ---
const studentName = "Gabster";
console.log("studentName:", studentName);

// studentName = "Someone Else";  // Uncomment this to see: TypeError!

// --- var: can be reassigned (like let) ---
var schoolYear = "2026";
console.log("schoolYear:", schoolYear);

schoolYear = "2027";
console.log("schoolYear updated:", schoolYear);

// --- Block scope: let vs var ---
{
  let insideLet = "I am let inside a block";
  var insideVar = "I am var inside a block";
  console.log("inside block - let:", insideLet);
  console.log("inside block - var:", insideVar);
}

// console.log(insideLet);  // Would crash: insideLet is NOT accessible here
console.log("outside block - var:", insideVar);  // Still works! var ignores blocks