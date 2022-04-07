/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole 
percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
 secondo queste regole:
:il prezzo del biglietto è definito in base ai km (0.21 € al km)
:va applicato uno sconto del 20% per i minorenni
:va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
L'output va stampato nella pagina HTML.*/

//chiedi numero chilometri da percorrere
const distance = parseInt(prompt("scrivi i chilometri che devi percorrere"));
console.log (distance)
//chiedi l'età dal passeggero
const età = parseInt(prompt ("scrivi l'età del passeggero"));
console.log (età)

//calcola prezzo del biglietto sconti esclusi
const price = distance * 0.21;
console.log(price);

//calcola sconto under 18
const u18discount = (price * 20 ) / 100;
console.log(u18discount);

//applica sconto under 18
const u18price = price - u18discount;
console.log(u18price);

//calcola sconto over 65
const o65discount = (price * 40 ) / 100;
console.log(o65discount);

//applica sconto over 65
const o65price = price - o65discount;
console.log(o65price);

//trasforma il risultato in prezzo con due decimali 

//Se l'età è minore di 18 anni stampiamo u18price in html 
//Se l'età è superiore a 65 anni stampiamo o65price in html 
//altrimenti stampiamo price
let resultMessage;
if (età < 18) {
    resultMessage = u18price;
} else if (età >= 65){
    resultMessage = o65price ;
} else {
    resultMessage = price;
}

console.log(resultMessage);

document.getElementById('result').innerHTML = "Il prezzo del suo biglietto è " + resultMessage + " euro";