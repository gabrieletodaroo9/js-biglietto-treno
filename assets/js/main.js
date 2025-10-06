// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.





// 1. Creo le variabili riguardanti il numero di chilometri da percorrere e l'età del passeggero

const myKilometers = Number(prompt("Quanti km farai?"))
const myAge = Number(prompt("Quanti anni hai?"))

console.log(myKilometers,myAge)

// 2. Creo una costante che sarà il prezzo al km del biglietto

const priceForKm = 0.21 

// 3.Creo una variabile chiamata "myTicketPrice"in cui moltiplico il valore del prezzo del biglietto al km per il numero di km da percorrere

// 4. SE la persona che deve prendere il biglietto ha meno di 18 anni divido il valore per 100 e lo moltiplico per 80(sconto 20%)
// ALTRIMENTI SE la persona che deve prendere il biglietto ha più di 65 anni  divido il valore per 100 e lo moltiplico per 60(sconto 40%)
// //  ALTRIMENTI stampo il valore di "myTicketPrice"

// Aggiorno il risultato finale in maniera da avere solo due numeri dopo la virgola