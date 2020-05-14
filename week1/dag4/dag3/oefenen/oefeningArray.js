let person = {
    name: 'Femke',
    age: 42
};

//dot notation
person.name = 'Maria';

// Bracket notation
person['name'] = 'John';
//wanneer de naamveranderd in run time
let selection = 'name';
person[selection] = 'John';

console.log(person);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 4;
console.log(selectedColors);

let groente = ['biet', 'wortel'];
let extraGroente = ['radijs', 'venkel'];

let samenvoegenGroente = groente.prototype.push.apply('groente', 'extraGroente');
console.log(groente);