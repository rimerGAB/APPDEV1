const aboutMe = {
  name: "Gabster",
  age: 21,
  course: "BSIS",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, age ${this.age}.`);
  }
};

aboutMe.hobby = "Gaming";
aboutMe.introduce();