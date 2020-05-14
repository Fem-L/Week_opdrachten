const numCom = 15;// hoe kies je een random nummer?
let numGuest;
const maxAmountOfTries = 3;
let amountOfTriesByUser = 0;

let naam = prompt('Welkom, wat is je naam?', ['Typ hier je naam']);//1 Vraag Naam

alert('Hey,' + naam + ' leuk dat je mee speelt!');//2 Heet Welkom

 while (numGuest !== numCom){
    numGuest = parseInt(prompt('Voer een nummer in tussen de 0 en 25 om te beginnen met raden', []));    
    alert('het nummer dat je koos was ' + numGuest); 
    amountOfTriesByUser++;
   if (numGuest !== numCom ||amountOfTriesByUser < maxAmountOfTries ) {
       alert('Dat is niet correct, wil je opnieuw raden?');
   }  else if(numGuest !== numCom && amountOfTriesByUser > maxAmountOfTries ){
       alert( 'Helaas je aantal pogingen zijn op, Tot een volgende keer');
       break
   }
   else {    
    alert('Gefeliciteerd, je hebt gewonnen!');
    alert('Dag, ' + naam + ' Tot de volgende keer!');//Afscheid
} };
