/* Hollands Broodje
Take a slice of bread
put the chees on the bread
put a slice of bread on top
*/

//Deel A

//function expression
const hollandsBroodje = function(){
    console.log('Take a slice of bread. Put the chees on the bread.Put a slice of bread on top.')
};

hollandsBroodje();

//Deel B

//1: Function Declaration
function makeSandwich(topping){
    console.log('There you go, a sandwich with ' + topping); 
}; //declareert 

makeSandwich('jam'); //called

//2: Fuction expression
const makeSandwich2 = function(topping){
    console.log('There you go, a sandwich with ' + topping); 
}; //declareert 

makeSandwich2('pasta');//called


//3: arrow function
const makeSandwich3 = (topping) => {
    console.log('There you go, a sandwich with ' + topping); 
}; //declareert

makeSandwich3('ham'); //called

//return statement
const makeSandwich4 = (topping) => {
    return 'There you go, a sandwich with ' + topping; 
}; 

console.log(makeSandwich4('hagelslag'));
console.log(makeSandwich4('kaas'));

//Deel C

const calculateDiscountedPrice = function(totalAmount, discount) {
    return (totalAmount - discount);    
};

console.log(calculateDiscountedPrice(45, 10));


//met if statement
const calculateDiscountedPriceMany = function( totalAmount , discount ) {      
    if (totalAmount >= 25) {
     totaalPrijs = totalAmount - discount;     
} else{
    totaalPrijs = totalAmount;
}
return totaalPrijs;
};

//calculateDiscountedPriceMany(15, 25);
calculateDiscountedPriceMany(45, 25);

console.log(totaalPrijs);



