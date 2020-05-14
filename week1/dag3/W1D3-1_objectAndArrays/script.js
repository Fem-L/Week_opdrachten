//Deel 1 Objecten

let person = {
    name: 'Femke',
    age: 42,
    evaluations: [7, 10, 9]
};

//console.log(person);
//console.log(person.name);
//console.log(person.age);
//console.log(person['age']);
//console.log(person.evaluations);

//Deel 2 Arrays

let selectedColors = ['groen', 'blauw', 'rood'];
//console.log(selectedColors);
//console.log(selectedColors.length);
//console.log(selectedColors[0]);

//let first = selectedColors [0];
//console.log(first);
//console.log[selectedColors.lenght - 1];

//let lastColor = selectedColors[selectedColors.length -1];
//console.log(lastColor);

let extraColor = selectedColors.push('geel');
let extraCijfer = selectedColors.push(5);

let groet = {
    greeting: 'Hi, ik ben een object'
};

//foute oplossing
//let groetToevoegen = selectedColors.push('groet'); 
//let groetToevoegen = array.prototype.push.apply(selectedColors, groet);

//array.push({property: value});
selectedColors.push({
    greeting:'Hi, ik ben een object'});

console.log(selectedColors);

//Deel 3 real project

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
		food: {
			favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
	{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
			favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
	{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
			favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]

//console.log("Herkomst kat 1:", catBreeds[0].origin)

//Log laatste naam van laatse kattenras
console.log('naam laatse kattenras:', catBreeds[2].name);
//of
let lastCat = catBreeds[catBreeds.length -1];
console.log('naam laatse kattenras:', lastCat.name);

//Log energylevels eerste kat
console.log('energylevel eerste kat:', catBreeds[0].energy_level);

// Log het eerste temperament van de temperamenten van de tweede kat. 
console.log('temperament 1 van kat 2:', catBreeds[1].temperament [0]);

//Log het laatst temperament van de temperamenten van de derde kat
console.log('laatste temperament van alle temperatmenten van kat 3', catBreeds[2].temperament[4]); 

//waarom werkt dit niet???
/*let lastTemperament = lastCat[lastCat.temperament.length -1 ];
console.log('laatste temperament van alle temperatmenten van kat 3', lastTemperament);*/

console.log('laatste temperament van alle temperatmenten van kat 3', catBreeds[2])



