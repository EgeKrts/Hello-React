const user = {
  name: "egekaratas",
  email: "info@gmail.com",
  city: "Ankara",
  roles: ["admin", "customer"],

  getRoles: function () {
    this.roles.forEach((role) => {
      console.log(role);
      console.log(this.name);
    });
  },
};

user.getRoles();

const addES5 = function () {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

console.log("Total = ", addES5(10, 20, 30));
