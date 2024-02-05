/*
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/


const buttonGo = document.getElementById("button");

buttonGo.addEventListener("click",
function(){
    
    const inputNum = Number(document.getElementById("input-num").value);
    if (inputNum%2 === 0){
        document.getElementById("result").innerText = inputNum; 
        document.getElementById("result").classList = "pt-3 text-danger fs-4 text-center"; 

    
    } else {
        document.getElementById("result").innerText = inputNum + 1; 
        document.getElementById("result").classList = "pt-3 text-danger fs-4 text-center"; 

    }

}
)
