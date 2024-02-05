/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array
fino a quando la somma degli elementi è minore di 50
*/

const array = [];

let sum = 0 ;


while (sum < 50){
    
    const userNumber = Number(prompt("Inserisci un numero"));

    if(isNaN(userNumber)){
        alert("Attenzione: Devi inserire un numero!")
    } else {

        sum += userNumber;
        array.push(userNumber);

    }
    
}





const newList = document.getElementById("list");
for (i=0; i<array.length; i++){
    const newElement = document.createElement("li")
    newElement.innerText = array[i];
    newElement.classList = "list-group-item text-danger";
    

    newList.append(newElement);
}