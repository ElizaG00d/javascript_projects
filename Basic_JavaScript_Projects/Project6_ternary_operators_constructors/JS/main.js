function ride_function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
} //ternary operators//


//OLD ENOUGH TO VOTE, TERNARY OPERATOR//
function voting() {
    var birth, vote;
    birth = document.getElementById("birth").value;
    vote = (birth >= 18) ? "You are too young to vote":"You cant vote!";
    document.getElementById("aged_voting").innerHTML = vote;
} //also doesn't work for whatever reason//

//------------NEW KEYWORD ASSIGNMENT-----------//
function Cybertronian(Type, City, Color) {
    this.Cybertronian_Type = Type;
    this.Cybertronian_City = City;
    this.Cybertronian_Color = Color;
}
//"this" is the object that possess the function//
//used within object, vlu is object, "this allows you to essentially create"//

var Optimus = new Cybertronian("Truck", "Iacon", "Red/Blue");
var Arcee = new Cybertronian("Motorcycle", "Pax", "Pink");
var Thundercrack = new Cybertronian("Fighter Jet", "Vos", "Blue/Red");
//"new" is used to create objects of the Cybertronian function//

function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Optimus is a " + Optimus.Cybertronian_Type + " created in " +
    Optimus.Cybertronian_City + " and is " + Optimus.Cybertronian_Color;
}   //bug report says myFunction isn't defined//
    //update, added the . in front of slash / to the script src and suddenly things work//
//---END NEW KEYWORD ASSIGNMENT------//

//reserved keyword challenge?//

//NESTED FUNCTION ASSIGNMENT--Academy Example--//
function nest_() {
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var starting = 1;
        function add_1() (starting += 1;)
        add_1();
        return starting;
    }
}

//code may be outdated, doesn't seem to work//
//matches given examples, debug and work on later//