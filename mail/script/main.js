// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// creo array
const mail = ["luca.lanarti@gmail.com", "antonio.rosita@hotmail.it", "pasquale.torrente@libero.it"];
// creo finestra per user input
const userInput = prompt("Inserisci la tua email");

if (mail.includes(userInput)) {
    console.log("Welcome back, type password for log-in.");
} else {
    console.log("User is not registered.");
};
