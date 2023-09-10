let inputNumberButton = document.getElementById("input-number-button")
let inputNumber = document.getElementById("input-number")
let NumberOfSquares;
let squares = document.querySelector(".create-squares")
let ButtonToAdd = document.querySelector("#add-new-square")
let DeleteSqaure = document.querySelector(".delete-square")
let nextSquareId;
let divForInput = document.querySelector(".input-div")

function inputNumberButtonClick(event) {
    NumberOfSquares=  inputNumber.value
    nextSquareId = NumberOfSquares-1;
    for(let i = 0 ; i < NumberOfSquares; i++){ 
        ButtonToAdd.style.display = "inline"
        squares.innerHTML  += `<div class="square" id="square-${i}"><button class="delete-square" tabindex="-1" onclick="deleteSquare(${i})" id="close-sqare-${i}">x</button>
        <input type="text" maxlength="1"  id="make-square-${i}" class="make-square-group" onkeyup="CheckValidity(${i})" />  </div> `
    }
 }

inputNumberButton.addEventListener("click", inputNumberButtonClick)

inputNumberButton.addEventListener("click", function(){
    divForInput.style.display="none"
})


function addNewSquare(){
    nextSquareId++;
    let nextSquare = document.querySelectorAll('.square').length
    squares.innerHTML  += `<div class="square" id="square-${nextSquareId}"><button class="delete-square" tabindex="-1" onclick="deleteSquare(${nextSquareId})" id="close-sqare-${nextSquareId}">x</button>
    <input type="text" maxlength="1"  id="make-square-${nextSquareId}" class="make-square-group" onkeyup="CheckValidity(${nextSquareId})" />  </div> `
}

function deleteSquare(id){
    let square = document.getElementById(`square-${id}`)
    square.remove()
    checkPalindrom()

}




function CheckValidity(id){
    console.log(id)
    let square = document.querySelector(`#make-square-${id}`)
    let squareValue = square.value
    let regex = /^[a-zA-Z\s]*$/;
    if(regex.test(squareValue) == false){
        alert("Unesite samo slova ili space")
        square.value = ""
    }
    else{
        checkPalindrom()
    }

}

function checkPalindrom(){
    let palindromText = document.querySelector(".CheckPalindrom");
    let stringSquare = ""
console.log(document.querySelectorAll('.square').length)

    for(let i = 0; i <= nextSquareId; i++){
        palindromText.innerHTML=""
        let square = document.querySelector(`#make-square-${i}`)
        //console.log(square.value)
        // if (square.value==""){
        //     stringSquare += " "
        // }
        console.log("vrijednost", square.value)
        stringSquare += square.value
    }

    let reverseString = stringSquare.split("").reverse().join("")
    console.log(reverseString)
    console.log("str", stringSquare)
    if(stringSquare == reverseString){
        palindromText.innerHTML += `<p class="palindrom-yes">Unijeta rijec je palindrom</p>` 
    }else{
        palindromText.innerHTML += `<p class="palindrom-no">Unijeta rijec nije palindrom</p>` 

    }

}



