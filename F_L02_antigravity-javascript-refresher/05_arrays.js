let favoriteFoods = ["Adobo", "Sinigang", "Kare-Kare"];

favoriteFoods.push("Lechon");
favoriteFoods.push("Lumpia");
let removed = favoriteFoods.shift();
console.log("Removed:", removed);

console.log("Count:", favoriteFoods.length);
for (const food of favoriteFoods) {
  console.log(food);
}

const liked = favoriteFoods.map(food => "🍽️ " + food);
console.log(liked);