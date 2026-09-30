let favoriteFoods = ["Sopas", "Pancit", "Spagetti"];

favoriteFoods.push("Champorado");
favoriteFoods.shift();

for (const food of favoriteFoods) {
  console.log(food);
}

const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);