/*
Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. 
(Se iniziate con un array da 3 elementi e l'altro da 5, e
seguite istruzioni sinchè non ne hanno entrambi 5)
*/

const firstArray = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];

const secondArray = ['Sarah', 'Tom', 'Lily', 'Jake', 'Emily'];

const firstElement = document.getElementById("primalista");
for (i=0; i<firstArray.length; i++){
    const newFirstElement = document.createElement("li")
    newFirstElement.innerText = firstArray[i];

    firstElement.append(newFirstElement);
}

const secondElement = document.getElementById("secondalista");
for (i=0; i<secondArray.length; i++){
    const newSecondElement = document.createElement("li")
    newSecondElement.innerText = secondArray[i];

    secondElement.append(newSecondElement);
}



let shorterArray

if(firstArray.length > secondArray.length){
    shorterArray = secondArray;

} else if((firstArray.length < secondArray.length)){
    shorterArray = firstArray
}

let isError = false

while ((firstArray.length / secondArray.length) != 1 ){

    //prendere input
    const input = prompt("inserisci nome da aggiungere")
    
    if(!isNaN(input)){
        alert("Attenzione: inserisci un nome!")
    } else {
        
        //  aggiungerlo al minore
        shorterArray.push(input)
        const newElement = document.createElement("li")
        newElement.innerText = input;
        newElement.classList = "text-danger"
    
        secondElement.append(newElement);

    }


}
