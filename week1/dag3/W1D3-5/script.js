/*
Requirements
1: vraag naam: ontvangen: prompt 1: 'Welkom, wat is je naam?'
2: Heet Welkom: delen: alert 1: reactie  'Hey [naam]'
3: Vraag een nummer: ontvangen: 
prompt 3: Voer een nummer in tussen de 0 en 25 om te beginnen met raden
   
4: vergelijk de cijfers: function: 
function getRandomInt(min, max) {
        min = Math.ceil(min);
         max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
5: Geef antwoord fout: delen: alert 2: wanneer false: dat is niet correct, wilt u opnieuw raden?
6: Geef antwoord goed: delen: alert 3: wanneer true: Gefeliciteerd, je hebt gewonnen!
7:Afscheid: delen: alert 4: spel klaar, prompt: Dag [naam]. Tot de volgende keer.
*/

const numCom = 15;// hoe kies je een random nummer?
let numGuest;
const maxAmountOfTries = 3;
let amountOfTriesByUser = 0;
let naam = prompt('Welkom, wat is je naam?', ['Typ hier je naam']);//1 Vraag Naam

alert('Hey,' + naam + ' leuk dat je mee speelt!');//2 Heet Welkom

While (numGuest !== numCom amountOfTriesByUser > maxAmountOfTries ) {
    numGuest = parseInt(prompt('Voer een nummer in tussen de 0 en 25 om te beginnen met raden', []));
    amountOfTriesByUser++
    alert('het nummer dat je koos was ' + numGuest);
} else if (numGuest !== numCom) {
       alert('Dat is niet correct, wil je opnieuw raden?');
   }  else {    
    alert('Gefeliciteerd, je hebt gewonnen!');
    alert('Dag, ' + naam + ' Tot de volgende keer!');//Afscheid
};












