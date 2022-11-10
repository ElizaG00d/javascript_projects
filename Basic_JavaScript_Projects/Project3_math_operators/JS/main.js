//from tech academy, math operations in js//

function addition_Function() {
    var addition = 2+2;
    document.getElementById("math").innerHTML = "2 + 2 =" + addition;
}

function subtraction() {
    var subtraction = 3-5;
    document.getElementById("math2").innerHTML = "3 - 5 =" + subtraction;
}

function multiply() {
    var multiply = 7*20;
    document.getElementById("math3").innerHTML = "7 x 20 =" + multiply;
}

function more_math() {
    var simple_math = (1 + 2)*10/2-5;
    document.getElementById("math4").innerHTML = "1 plus 2, multiplied by 10,"
    + " divided in half and then subtracted by 5 equals " + simple_math; 
}

//in examples all the document.get ids are "Math"//

//modulus operator//
function modulus_op() {
    var simple_math = 25 % 6;
    document.getElementById("math5").innerHTML = "When you divide 25 by 6 you have a remainder of: " +
    simple_math;
}

//negation op// //bug displays .innerHTML as null//
function negation_op() {
    var x = 10;
    document.getElementById("math6").innerHTML = -x;
}

//increment, decrement//
function increment_op() {
    var m = 7;
    m++;
    document.getElementById("math7").innerHTML = m;
}

function decrement_op() {
    var r = 20;
    r--;
    document.getElementById("math8").innerHTML = r;
}


//random number window//
window.alert(Math.random() * 500);

//JS Math Object and Math Object method//
function round() {
    var y = Math.ceil(4.4);
    document.getElementById("math9").innerHTML = y;
}