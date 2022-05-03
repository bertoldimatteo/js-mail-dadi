// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// creo array
const mail = ["luca.lanarti@gmail.com", "antonio.rosita@hotmail.it", "pasquale.torrente@libero.it"];

const submit = document.getElementById("submit");

submit.addEventListener("click", 
    function() {
        const userInput = document.getElementById("userInput").value;
        const userPwd = document.getElementById("userPwd");
        if (mail.includes(userInput)) {
            userPwd.classList.add("showClass")
        } else {
            console.log("User is not registered.");
        };
    }
);


