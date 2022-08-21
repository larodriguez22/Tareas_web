const person = {
  place: "Colombia",
  sayMyCountry: function () {
    console.log(`Hi, I am from ${this.place}`);
  },
};

const visitor = { place: "Poland" };

person.sayMyCountry.call(visitor);
