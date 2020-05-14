let yourAge;
let amountCoffee;

const calculateSupply = (amountCoffee, yourAge) => {
    let totalAmount = (365*amountCoffee)*(80-yourAge);
    console.log('you need ' + totalAmount + ' cups of coffee to last until the age of 80')
};

calculateSupply (3, 42);