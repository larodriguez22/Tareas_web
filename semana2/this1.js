const person = {
  place: "Colombia",
  sayMyCountry: function () {
    console.log(`Hi, I am from ${this.place}`);
  },
};

person.sayMyCountry();
