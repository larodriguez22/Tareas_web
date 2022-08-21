const person = {
  country: "Colombia",
  sayMyCountry: function () {
    console.log(`I am from ${this.country}`);
  },
  friend: {
    country: "Poland",
    sayMyCountry: function () {
      console.log(`I am from ${this.country}`);
    },
  },
};

person.sayMyCountry();
person.friend.sayMyCountry();
