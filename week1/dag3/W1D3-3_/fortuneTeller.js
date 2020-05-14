//FORTUNETELLER

//argumenten
//aantal kinderen
//naam partner
//Plaatsnaam
//werk

//Je zal als .... werken in ....plaats, 
//je zal getrouwd zijn met .... en ...kinderen hebben.

let aantalKids;
let partnerNaam;
let woonplaats;
let werk;

const fortuneTeller = (werk, woonplaats, partnerNaam, aantalKids) => {
    let future = 'Je zal als ' + werk + ' werken in ' + woonplaats + 
    ' en je zal getrouwd zijn met ' + partnerNaam + ' en ' + aantalKids + ' kinderen hebben';
    console.log(future)
};

fortuneTeller ('bakker', 'Eindhoven', 'Piet', 2);


