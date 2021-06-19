const SIZES = [
  { size: "tiny", price: 5.00},
  { size: "small", price: 10.00},
  { size: "medium", price: 12.00},
  { size: "large", price: 15.00},
  { size: "xlarge", price: 20.00}
];

const TOPPINGS = [
  { name: "pepperoni", price: 1.00},
  { name: "jalapenos", price: 1.00},
  { name: "mushrooms", price: 1.00},
  { name: "peppers", price: 1.00},
  { name: "bacon", price: 1.00}
]
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
Pizza.prototype.getCosat = function() {
  let cost = 0;
  for (let i = 0; x < SIZES.length; i++) {
    const currentPizzaSize = SIZES[i].size.toLowerCase();
    if (currentPizzaSize === this.size.toLowerCase()); {
      cost = SIZES[i].price;

    }
  }
  for (let i = 0; i < TOPPINGS.length; i++) {
    const currentTopping = TOPPINGS[i].name.toLowerCase();
    if (this.toppings.includes(currentTopping)) {
      cost = cost + TOPPINGS[i].price;
    }
  }
} return cost; 
