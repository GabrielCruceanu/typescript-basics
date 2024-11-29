const pizzas = [
  {
    name: "Pepperoni",
    toppings: ["pepperoni"],
  },
];

// >>>>> ARROW FUNCTION AND IMPLICIT RETURN ---------------------

const mappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase());

console.log("ARROW FUNCTION > mappedPizzas", mappedPizzas);

// OLD VERSION FUNCTION -----------------------------------
const pizzaWithOldVersionOfFunction = {
  name: "Blazing Inferno",
  getName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  },
};

// ARROW FUNCTION VERSION ---------------------------------
const pizzaWithArrowFunction = {
  name: "Blazing Inferno",
  getName: () => pizzaWithArrowFunction.name,
};

console.log("ARROW FUNCTION > getName()", pizzaWithArrowFunction.getName());

// DEFAULT PARAMETERS -------------------------------------
function multiply(a: number, b: number = 1) {
  return a * b
}
console.log("DEFAULT PARAMETERS > multiply(2)", multiply(2));
console.log("DEFAULT PARAMETERS > multiply(2, 3)", multiply(2, 3));
