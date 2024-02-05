/*
Genera un numero casuale tra 1 e 100
 e poi chiedi all'utente di indovinare il numero.
  Il programma poi deve far comparire un messaggio "il numero è troppo alto"
   oppure "il numero è troppo basso" 
   nel momento in cui il numero detto dall'utente 
   non è perfettamente uguale al numero estratto in modo casuale.
Quando l'utente trova il numero, fateglielo sapere!
*/

const randomNum = Math.round(Math.random() * 100 + 1);


let userNum;
do {
    
    userNum = prompt(`Inserisci un numero o inserisci "fine" per arrenderti`);

    if (userNum==="fine"){
        document.querySelector("#result").innerHTML = "Ti sei arreso"

    } else if(isNaN(userNum)||(userNum === "")){
        alert("Devi inseirre un numero!")
    } else if (userNum>randomNum){
        alert("Ritenta: Numero troppo alto!");
    } else if (userNum<randomNum) {
        alert("Ritenta: Numero troppo basso!");
    }
    
} while (userNum != randomNum && userNum != "fine" );


if(userNum==="fine"){
document.querySelector("#result").innerHTML = "Ti sei arreso!"

} else {

    document.querySelector("#result").innerHTML = "Hai vinto!"
}


