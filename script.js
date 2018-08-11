var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createDelButton() {
    var delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode("Delete"));

    delButton.addEventListener("click", deleteListItemAfterClick);
    return delButton;
}

function deleteListItemAfterClick(event) {
    ul.removeChild(event.currentTarget.parentElement);
}

function createListElement() {
    var li = document.createElement("li");
    li.addEventListener("click", toggleListDone);
    li.appendChild(document.createTextNode(input.value + " "));
    li.appendChild(createDelButton());
    ul.appendChild(li);
    input.value = "";
    input.focus();
}

function toggleListDone(event) {
    event.currentTarget.classList.toggle("done");
}


function addListAfterClick() {
    if (inputLength() > 0)
    {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode == 13)
    {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
