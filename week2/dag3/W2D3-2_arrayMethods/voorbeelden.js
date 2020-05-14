//ARRAY METHODS

const items = [
    { name: 'Bike', price: 100 },
    { name: 'Book', price: 25 },
    { name: 'Phone', price: 250 },
    { name: 'computer', price: 1000 }
];
const numbers = [1, 2, 3];

// .filter
//geeft alleen items die voldoen aan de gevraagde filter (prijs <= 100)
//maakt een nieuwe lijst de originele lijst blijft in tact
const filteredItems = items.filter((item) => item.price <= 100);

console.log('Dit zijn de items:', items);
console.log('prijs is lager dan 100:', filteredItems);

// .map
//maakt een nieuwe array van de gevraagde items (names in dit geval)
const itemNames = items.map((item) => {
    return item.name
});

console.log('Dit is een array van namen:', itemNames);

// .find
//vind item en geeft true of false terug
const foundItem = items.find((item) => item.name === 'Book');
console.log(foundItem);

// .forEach
//geeft geen return. Geeft overzicht van items, in dit geval de price
items.forEach((item) => console.log(item.price));

// .some
//geeft true of false
const hasExpensiveItems = items.some((item) => item.price >= 200);
console.log(hasExpensiveItems);

// .every
//lijkt op .some. geeft true of false
const hasCheapItems = items.every((item) => item.price <= 100);
console.log(hasCheapItems);

// .reduce
//doet een cummulatieve berekening, het telt op. 
//Heeft twee parameters,  een property en een item
const total = items.reduce((currentTotal, item) => item.price + currentTotal, 0);
console.log(total);

// .include
//alleen een argument, geen function. geeft true of false
const includesTwo = numbers.includes(2);
console.log(includesTwo);
