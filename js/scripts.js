const SIZES = [
    { size: 'small', price: 8.00 },
    { size: 'medium', price: 10.00 },
    { size: 'large', price: 12.00 }
]

const TOPPINGS = [
    { name: 'sausage', price: 1.00 },
    { name: 'pepperoni', price: .90 },
    { name: 'mushrooms', price: 1.50 }
]

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.getCost = function() {
    //get the cost of the size
    const foundSize = SIZES.find(x => x.size.toLowerCase() === this.size.toLowerCase());
    let cost = foundSize.price;

    //calculate the toppings
    const toppings = TOPPINGS.filter(x => this.toppings.includes(x.name.toLowerCase()));
    toppings.forEach(x => {
        cost += x.price;
    })

    return cost;
}

$(document).ready(function() {
    //attach calculation to button

    //create a pizza

    //calculate the price
    $('#calculate').click(function() {
        //get the pizza size
        const size = $('#size').val();
        const toppings = [];
        $(':checkbox:checked').each(function(i) {
            //get the value
            const lowerCaseVal = $(this).val().toLowerCase();
            toppings.push(lowerCaseVal);
        });

        //create our pizza
        const pizza = new Pizza(size, toppings);


    })
});