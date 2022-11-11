function first_function() {
    var str = "This is a little sentence for you.";
    document.getElementById("Button_Text").innerHTML = str;
} //displays str on click of button in html//

function second_function() {
    var sentence = "This is another line of text ";
    sentence += "and this is a connected one.";
    document.getElementById("Txt_2").innerHTML = sentence;
}
//"innerHTML mods the content of an HTML element"//

//FUNCTION CHALLENGE//
function myFunction() {
    var x = "This is the challenge function."
    document.getElementById("demo").innerHTML = x;
}

var x = myFunction();
document.getElementById("demo").innerHTML = x;
    //note: apparently, one thing wrong with something in JS//
    //such as an undefined variable//
    //causes the rest of the code to not work?//

    //bug report says innerHTML is null//

