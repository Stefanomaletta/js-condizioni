// Traccia 02 · Il conto alla romana
// La consegna è nel README, alla voce "02 · Il conto alla romana".

/*
  STEPS
  1 -con un promt mi chiedo quante persone siete  ma usando paresint  per darmi il numero e con un altro promt mi chiedo il conto
  2 - aggiungo la mancia  di 10euro
  3 -divido il tot per il numero delle persone
  4 -con alert mostra  e con tofixed (2) per tagliare in due decimali
*/

// # Fase di preparazione 
const mancia = 10;


// # Fase di raccolta dati
const numeroPersone = parseInt(prompt("Quante persone siete?"))
const totaleConto = parseInt(prompt("Totale conto?"))

// # Fase di elaborazione
const quotaATesta = (totaleConto + mancia) / numeroPersone


// # Fase di output
alert(`A testa: ${quotaATesta.toFixed(2)} €`)
