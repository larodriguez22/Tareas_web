const person = {
  name: "Juan",
  place: "Colombia",
  sayHello: function () {
    const sayMyCountry = () => {
      console.log(`I am from ${this.place} `);
    };
    console.log(`I am ${this.name}`);
    sayMyCountry();
  },
};

person.sayHello();
