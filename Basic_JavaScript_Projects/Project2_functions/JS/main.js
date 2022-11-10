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

var x = myFunction(3, 7);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
    return a * b;
}
    //note: apparently, one thing wrong with something in JS//
    //such as an undefined variable//
    //causes the rest of the code to not work?//

    //bug report says innerHTML is null//

