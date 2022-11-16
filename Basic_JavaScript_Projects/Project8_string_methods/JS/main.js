function sentence_connect() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concat").innerHTML = whole_sentence;
} //concatenate a sentence w/ concat method//

function slice_() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = section;
} //slice method, extracts section of string, returns section in new string//

//toUpperCase() method//
function uppercase_() {
    var t = "js method";
    document.getElementById("upper").innerHTML = t.toUpperCase();
}

//search() method//
function search_() {
    var s = "To find something in a string or other value.";
    document.getElementById("search").innerHTML = s.search(/other/);
}

//toString() method//
function string_() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
} //display number as str//

//toPrecision() method//
function precision_() {
    var x = 1245876.98765489028983;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
} //cuts down the number//

//toFixed() method//
function fixed_() {
    var v = 5.568790;
    document.getElementById("fix-method").innerHTML = v.toFixed(5); //rounds up to 10 decimals//
}


//valueOf() method//
function tovalu_() {
    var v = 20;
    document.getElementById("value-method").innerHTML = v.valueOf();
} //primitive numb value//