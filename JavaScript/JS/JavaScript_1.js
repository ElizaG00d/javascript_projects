
//SWITCH STATEMENT//
function color_function() {
    var color_output;
    var colors = document.getElementById("color-input").ariaValueMax;
    var color_string = " but is it maroon?";
    switch(colors) {
        case "Red":
            color_output = "Red" + color_string;
        break;
        case "Maroon":
            color_output = "Congrats, you've picked correctly!";
        break;
        case "Turquose":
            color_output = "Turquose" + color_string;
        break;
        case "Purple":
            color_output = "Purple" + color_string;
        break;
        case "Magenta":
            color_output = "Magenta" + color_string;
        break;
        case "Pink":
            color_output = "Pink" + color_string;
        break;
        default:
            color_output = "Please enter a color exactly as written.";
    }
    document.getElementById("output").innerHTML = color_output;
} //tends to return please enter exactly as written//

//class name//
document.getElementsByClassName("named").innerHTML = "dope";

//CANVAS CIRCLE//
var v = document.getElementById("canvas1");
var vtx = v.getContext("2d");
vtx.beginPath();
vtx.arc(190, 100, 80, 0, 4 * Math.PI);
vtx.stroke();
//the variable declared is then added to the variable.getContext or vtx//

//TEXT//
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.font = "40px Cambria";
ctx.strokeText("Circle", 20, 100);

//CIRLCE GRADIENT//
var x = document.getElementById("canvas1");
var xtx = x.getContext("2d");
//gradient creation//
var grd = xtx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");
//fill//
xtx.fillStyle = grd;
xtx.fillRect(5, 5, 400, 200); //padding, width and length//
    //how do u make it a background//