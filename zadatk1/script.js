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
let suggestionList = document.getElementById("suggestionList");
function submitButtonClick(event){
    event.preventDefault()
    list.innerHTML += '<li class="listItem">' + inputText.value + '<button class="xButton">X</button>' + '</li>';
    for (button of xButtons){
        button.addEventListener("click", removeItem)
    }
}
searchText = document.getElementById("search");
submitButton.addEventListener("click", submitButtonClick);
let searchSuggestion = document.getElementById("suggestionList")


var suggestionIteration = 0 //pozicija selektovanog searchSuggestion

function moveSuggestion(event){ //racuna i vraca novu poziciju selekcije searchSuggestion
    let maxNum = suggestionList.childNodes
    if  (event.key === "ArrowUp") { //da ne bi suggestionIteration presao ispod nule
        if (suggestionIteration > 0)  {
            suggestionIteration --
        }
        else if (suggestionIteration == 0){
            suggestionIteration = maxNum.length-1
        }
    }
    else if  (event.key === "ArrowDown") {
        if(suggestionIteration < maxNum.length-1){ //da ne bi suggestionIteration presao iznad duzine liste
            suggestionIteration ++
        }
        else if(suggestionIteration == maxNum.length-1){
            suggestionIteration = 0
        }
    }
}

function pressedEnter(event){
    if(event.key === "Enter"){
        searchText.value = event.target.innerText;
        //console.log("Enter!")
    }
}

function searchButtonClick(event){
    //console.log("123  ", list.children)
    searchSuggestion.innerHTML =""
    for (element of list.children){
        if (element.innerText.includes(searchText.value)){
            if(!searchText.value == ""){
                searchSuggestion.innerHTML += '<li class="sugestionElement">'+element.innerText.slice(0,-1)+'</li>';
            }
        }
    }
    //console.log("123  ", searchSuggestion.children)
    for (suggestion of searchSuggestion.children){ //prolazi kroz generisane suggestions i daje im event listener za enter
        suggestion.addEventListener("keydown", pressedEnter)
        console.log("123  ", suggestion)
    }
    document.addEventListener("keydown", moveSuggestion)
    currentSuggestion = suggestionList.children[suggestionIteration]
    currentSuggestion.style.backgroundColor = "green"
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
        items.push(element.innerText.split("\n")[0]);
        // console.log(element.innerText.split("\n")[0]);
    }


    localStorage.setItem("listItems", JSON.stringify(items));
}

window.onload = function() {
    const savedItems = localStorage.getItem("listItems"); // '["Item 1\nX","Item 2\nX","Item 3\nX","Item 4\nX","mare\nX"]'
    
    if (savedItems) {
        const items = JSON.parse(savedItems); // ["Item 1\nX","Item 2\nX","Item 3\nX","Item 4\nX","mare\nX"]

        list.innerHTML = items.map(item => '<li class="listItem">' + item + '<button class="xButton">X</button>' + '</li>').join('');

        let xButtons = document.getElementsByClassName("xButton");
        for (button of xButtons) {
            button.addEventListener("click", removeItem);
        }
    }
};















