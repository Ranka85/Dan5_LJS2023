//Nikola Radenovic Ranka Pejanovic
function removeItem(event){
    event.target.parentNode.remove()
}
let xButtons = document.getElementsByClassName("xButton");
for (button of xButtons){
    button.addEventListener("click", removeItem)
}
let list = document.getElementById("list");
let inputText = document.getElementById("inputText");
let submitButton = document.getElementById("submitButton");
let searchButton = document.getElementById("searchButton");
function submitButtonClick(event){
    event.preventDefault()
    list.innerHTML += '<li class="listItem">' + inputText.value + '<button class="xButton">X</button>' + '</li>';
    for (button of xButtons){
        button.addEventListener("click", removeItem)
    }
}
searchText = document.getElementById("search");
submitButton.addEventListener("click", submitButtonClick);
let searchSuggestion = document.getElementById("list-to-append")
function moveSuggestion(event){
    currentSuggestion = list.children[0]
    if  (event.key === "ArrowUp") {
        console.log("Up arrow key pressed")
    }
    else if  (event.key === "ArrowDown") {
        console.log("Up arrow key pressed")
    }
}
//searchSuggestion.innerHTML += `<li id=${"sugestionElementID" + i} class="sugestionElement">${element.innerText.slice(0,-1)}</li>`;
document.addEventListener("keydown", moveSuggestion)
function searchButtonClick(event){
    searchSuggestion.innerHTML =""
    i = 0
    for (element of list.children){
        if (element.innerText.includes(searchText.value)){
            if(!searchText.value == ""){
            searchSuggestion.innerHTML += `<li id=${"sugestionElementID" + i} class="sugestionElement">${element.innerText.slice(0,-1)}</li>`;
           // console.log(searchText.value)
           i++
        }
        }
    }
}
searchButton.addEventListener("click", searchButtonClick);
function searchSuggestionClick(event) {
    searchText.value = event.target.innerText;
    searchSuggestion.innerHTML = "";
    searchButtonClick(event);
    JusteSelectOne();
}
searchSuggestion.addEventListener("click", searchSuggestionClick);
function JusteSelectOne() {
   // console.log("pretraga kje " ,searchText.value);
    let listToRemove = document.getElementById("list")
    for ( element of listToRemove.children) {
        //console.log(element.innerText)
        if (element.innerText.includes(searchText.value)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}


//cookies
function submitButtonClick(event) {
    event.preventDefault();

    list.innerHTML += '<li class="listItem">' + inputText.value + '<button class="xButton">X</button>' + '</li>';
    
    let xButtons = document.getElementsByClassName("xButton");
    for (button of xButtons) {
        button.addEventListener("click", removeItem);
    }

    saveListItems();
}

function saveListItems() {
    const items = [];
    for (const element of list.children) {
        items.push(element.innerText);
    }

  
    localStorage.setItem("listItems", JSON.stringify(items));
}

window.onload = function() {
    const savedItems = localStorage.getItem("listItems");
    
    if (savedItems) {
        const items = JSON.parse(savedItems);

        list.innerHTML = items.map(item => '<li class="listItem">' + item + '<button class="xButton">X</button>' + '</li>').join('');

        let xButtons = document.getElementsByClassName("xButton");
        for (button of xButtons) {
            button.addEventListener("click", removeItem);
        }
    }
};















