//Gebruik alleen .map, .reduce, .filter

let superheroes = [
    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "first_appearance": "All-American Comics #16",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
  },
  {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
  },
  {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
  },
  {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
  },
  {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
  },
  {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
  },
  {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
  },
  {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
  },
  {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "unknown"
    }
  ]

//array van namen .map
 
const namesHeroes = superheroes.map(hero => hero.name);
console.log('Dit zijn de namen van de heroes:', namesHeroes);


//array van lichte helden (< 190 pounds) ;

const lightWeightHeroes = superheroes.filter((item) => item.weight < 190);
console.log('Dit zijn de lichtgewichten:', lightWeightHeroes);

//de namen van de zware helden

const heavyWeightHeroes = superheroes.filter(item => item.weight > 200).map(item => item.name);

console.log('Dit zijn de zwaargewichten:', heavyWeightHeroes);

//array van de first appearances

const firstAppearance = superheroes.map((item) => item.first_appearance);
console.log('Comic waarin een hero geintroduceerd werd:', firstAppearance);

//helden van DC Comics

const dcComics = superheroes.filter(item => item.publisher === "DC Comics").map(item => item.name);
console.log('Dit zijn de helden van DC Comics:', dcComics);

//helden van Marvel Comics

const marvelComics = superheroes.filter(item => item.publisher === "Marvel Comics").map(item => item.name);
console.log('Dit zijn de helden van Marvel Comics:', marvelComics);

//Tel de gewichten bij elkaar op van helden DC Comics
//deze oefening is nog niet af
/*
const publisherDcComics = superheroes.filter(item => item.publisher === "DC Comics");
//console.log(publisherDcComics); 

const gewicht = publisherDcComics.map(item => item.weight);
   
console.log('gewicht:', gewicht); 

//.reduce((total, item) => item.weight + total);

*/

