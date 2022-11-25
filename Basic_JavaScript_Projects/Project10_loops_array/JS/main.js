//insert loop here?//

//length//
function length_() {
    let t = "This is a little string."
    document.getElementById("str_length").innerHTML = t.length;
} //includes let keyword//

//FOR LOOP//
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments(Y) + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//document.getElementById().innerHTML array function//
//ARRAY//
function array_function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "Napping";
    Dog_Picture[1] = "Barking";
    Dog_Picture[2] = "Eating";
    Dog_Picture[3] = "Playing";
    document.getElementById("array").innerHTML = "In this image the dog is " +
    Dog_Picture[1] + ".";
}

//CONST KEYWORD//
function const_function() {
    const fruit = {type: "Apple", Size: "Large", Color: "Yellow"};
    fruit.color = "green"; //changed property//
    fruit.quality = "ripe"; 
    fruit.age = "7 days"; //added property//
    document.getElementById("const").innerHTML = "The fruit was " +
    fruit.color + " and " + fruit.quality;
}

    //bug starts after this//

//RETURN CHALLENGE// //pretty sure its for the return function//
function return_func() {
    let x = 4
    return x;
}
document.getElementById("returns").innerHTML = return_func();

    //var x = myFunction(4, 3);//
    //function myFunction(a, b) 
    //  return a * b;
    // w3 school example//

//OBJECT ASSIGNMENT//
    //may need a function here for it to work?//
    //"uncaught/open line"????//
function object_assign() {
    let droid = {
        type: "Biped";
        make: "Translator";
        build: "Post-Republic";
        color: "Gold";
        description : function() {
            return "The droid is a " + this.type + " and used for as a " + this.make;
        }
    };
    document.getElementById("object").innerHTML = droid.description(); 
}
    //this: keyword, refers to an object, depends on called, refers to element receiving the event//

//BREAK AND CONTINUE CHALLENGE//
function br() {
    for (let y = 0; y < 5; y++) {
        if (y === 2) {break;}
        txt += "The count is at " + y + "<br>";
    }
    document.getElementById("br_cont").innerHTML = txt;
}

function cont() {
    for (let i = 20; i > 10; i--) {
        if (i === 13) { continue; }
        txt += "The number is " + i + "<br>";
    }
    document.getElementById("br_cont").innerHTML = txt;
}