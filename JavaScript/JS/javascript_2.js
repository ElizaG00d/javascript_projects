
function validate() {
    let x = document.forms["yourInfo"]["name1"].value;
    if (x === "") {
        alert("You must put in your information.");
        return false;
    }
} //creates an alert if the form is empty//
    //prevents submission if form is empty//
    //wasn't working until adding the "onsubmit="numb_valid"//

function numb_valid() {
    var x = document.getElementById("number").value;
    //gets value of input field w/ id//
    //if x is not a number or less than one or greater than 10//
    let txt;
    if (isNaN(x) || x < 1 || x > 10) {
        txt = "Input invalid";
    } else {
        txt = "Input Accepted";
    }
    document.getElementById("validation2").innerHTML = txt;
} //working//