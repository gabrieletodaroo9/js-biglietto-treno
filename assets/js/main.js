// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.





// 1. Creo le variabili riguardanti il numero di chilometri da percorrere e l'età del passeggero

const kilometers = Number(prompt("Quanti km farai?"))
const age = Number(prompt("Quanti anni hai?"))

console.log(kilometers, age)

// 2. Creo una costante che sarà il prezzo al km del biglietto

const priceForKm = 0.21


// 3.Creo una variabile chiamata "myTicketPrice"in cui moltiplico il valore del prezzo del biglietto al km per il numero di km da percorrere

let ticketPrice = priceForKm * kilometers

// 4. SE la persona che deve prendere il biglietto ha meno di 18 anni divido il valore per 100 e lo moltiplico per 80(sconto 20%)
// ALTRIMENTI SE la persona che deve prendere il biglietto ha più di 65 anni  divido il valore per 100 e lo moltiplico per 60(sconto 40%)
// //  ALTRIMENTI mantieni il valore di "myTicketPrice"

if (age < 18) {
 ticketPrice = ticketPrice / 100 * 80
} else if (age >= 65) {
    ticketPrice = ticketPrice / 100 * 60
} else {
    ticketPrice = ticketPrice
}

// Aggiorno il risultato finale in maniera da avere solo due numeri dopo la virgola e lo faccio apparire nell'alert

const realTicketPrice = ticketPrice.toFixed(2)
console.log(realTicketPrice);

alert("Il prezzo del biglietto è : "+ realTicketPrice + " " + "€");