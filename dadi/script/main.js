// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const userNumber = Math.floor((Math.random() * 6) + 1);
const pcNumber = Math.floor((Math.random() * 6) + 1);

if ( userNumber > pcNumber) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}