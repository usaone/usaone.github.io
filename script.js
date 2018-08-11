var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.body;
var button = document.querySelector("#random");

function genRandomColor() {
    var r = "0"+parseInt(Math.floor(Math.random() * 255), 10).toString(16);
    var g = "0"+parseInt(Math.floor(Math.random() * 255), 10).toString(16);
    var b = "0"+parseInt(Math.floor(Math.random() * 255), 10).toString(16);
    
    return "#" + r.substr(r.length-2, 2) + g.substr(g.length-2, 2) + b.substr(b.length-2, 2)
}

function genRandomBackground() {
    color1.value = genRandomColor();
    color2.value = genRandomColor();
    setGradient();
}

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", genRandomBackground);

setGradient();