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
  { name: "bacon", price: 1.00},
  { name: "pineapple", price: 1.00}
];
const SIDES = [
  {name: "wings", price: 5.00},
  {name: "garlic-bread", price: 8.00},
  {name: "salad", price: 10.00},
  {name: "chocolate-cake", price: 10.00}
];
function Pizza(size, toppings, sides) {
  this.size = size;
  this.toppings = toppings;
  this.sides = sides;
};
Pizza.prototype.getCost = function() {
  let cost = 0;
  for (let i = 0; i < SIZES.length; i++) {
      const currentPizzaSize = SIZES[i].size.toLowerCase();
      if (currentPizzaSize === this.size.toLowerCase()) {
          cost = SIZES[i].price;
      }
  }
  for (let i = 0; i < TOPPINGS.length; i++) {
    const currentTopping = TOPPINGS[i].name.toLowerCase();
    if (this.toppings.includes(currentTopping)) {
      cost = cost + TOPPINGS[i].price;
    }
  }
  for (let i = 0; i < SIDES.length; i++) {
    const currentSide = SIDES[i].name.toLowerCase();
    if (this.sides.includes(currentSide)) {
      cost = cost + SIDES[i].price;
    }
  }
  return cost; 
}

$(document).ready(function() {
  $('#calculate').click(function() {
      const size = $('#size').val();

      const toppings = [];
      $('input[name="toppings[]"]:checkbox:checked').each(function(_i) {
          const lowerCaseVal = $(this).val().toLowerCase();
          toppings.push(lowerCaseVal);
      });
      const sides = [];
      $('input[name="sides[]"]:checkbox:checked').each(function(_i) {
          const lowerCaseVal = $(this).val().toLowerCase();
          sides.push(lowerCaseVal);
      });

      const pizza = new Pizza(size, toppings, sides);

      $('#total').html('$' + pizza.getCost().toFixed(2));
  })
});