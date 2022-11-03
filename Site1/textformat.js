var a, b, c;

// b = document.getElementsByClassName("text-color");
// c = document.getElementsByClassName("background-color");

function setTextSize() {
    a = document.getElementById("text-size").value;
    document.getElementById("freeform").style.fontSize = a;
}
function setTextColor() {
    a = document.getElementById("text-color").value;
    document.getElementById("freeform").style.color = a;
}
function setBackgroundColor() {
    a = document.getElementById("background-color").value;
    document.getElementById("freeform").style.backgroundColor = a;
}
function setFont() {
    a = document.getElementById("font-family").value;
    document.getElementById("freeform").style.fontFamily = a;
}