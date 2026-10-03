const aboutMe = {
  name: "Gabster",
  age: 20,
  course: "BSIS",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, age ${this.age}, taking ${this.course}.`);
  }
};

aboutMe.hobby = "Coding";
console.log(aboutMe.course);
console.log(aboutMe.hobby);
aboutMe.introduce();