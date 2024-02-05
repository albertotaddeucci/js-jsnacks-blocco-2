/*
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/


const buttonGo = document.getElementById("button");

buttonGo.addEventListener("click",
function(){
    
    const inputNum = Number(document.getElementById("input-num").value);
    if (inputNum%2 === 0){
        document.getElementById("result").innerText = inputNum; 
    
    } else {
        document.getElementById("result").innerText = inputNum + 1; 
    }

}
)
