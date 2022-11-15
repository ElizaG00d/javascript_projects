//LOCAL GLOBAL VAR// //global is defined outside function, local is inside function//
function divide_numb() {
    var y = 10;
    document.write(y/2 + "<br>");
} //local//

var x = 20;
function add_numb() {
    document.write(10 + x);
} //global//
divide_numb();
add_numb();

//console.log bug//
function err_() {
    documentrite(x - 2);
}

//GET DATE METHOD//
function dated() {
    if (new Date().getHours() < 16);
    document.getElementById("time").innerHTML = "It's before 4 p.m.";
} //work on this later//

//ELSE STATEMENT//
function can_drink() {
    Age = document.getElementById("Age").value;
    if (Age>=21) {
        Drink = "You, in fact, can drink.";
    }
    else {
        Drink = "You cannot drink.";
        }
    document.getElementById("How_old_are_you?").innerHTML = Drink;
}

//ELSE IF STATEMENT//
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}