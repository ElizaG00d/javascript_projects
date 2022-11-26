//this var keeps track of whose turn it is//
let activePlayer = 'X';
//array stores an array of moves, use to determine win conditions//
let selectedSquares = [];

//function is for placing an x or 0 in a square//
function placeXorO(squareNumber) {
    //this condition ensures a square hasn't been selected already//
    //.some method used to check each element of selectSquare array//
    //to see if it contains the square number clicked on//
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this var retrieves HTML element id that was clicked//
        let select = document.getElementById(squareNumber);
        //condition checks who's turn it is//
        if (activePlayer === 'X') {
            //if active player is equal to 'X' the x.png is placed in HTML//
            select.style.backgroundImage = 'url("img/x.png")';
        } else {
            //if activeplayer is equal to '0' the o.png is placed in HTML//
            select.style.backgroundImage = 'url("img/o.png")';
        }
        //squareNumber and active player are concatenated together and added to the arrayt//
        selectedSquares.push(squareNumber + activePlayer);
        //calls a function to check for any wind conditions//
        checkWinConditions();
        //condition is for changing the active player//
        if (activePlayer === 'X') {
            //if active player is 'X' change it to '0'.//
            activePlayer = '0';
            //if active player is anything other than 'x'//
        } else {
            //change active player to 'x'//
            activePlayer = 'X';
        }
        //this function plays placement sound//
        Audio('./media/place.mp3');
        //condition checks to see if it is the computer's turn//
        if (activePlayer === "0") {
            //disables clicking for computer's turn//
            disableClick();
            //function waits 1 second before the computer places the image and enables click//
            setTimeout(function () {computersTurn(); }, 1000);
        }
        //returning true is needed for out computersTurn() function to work//
        return true;
    }
}

//inserted in part 5, part of the functions that were preventing the program from running//

//this function parses the selectedSquares array to search for win conditions//
//drawLine() called to draw a line on the screen if the condition is met//
function checkWinConditions() {
    //X 0, 1, 2 condition//
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100)}
    //X 3, 4, 5 condition//
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    //X 6, 7, 8 condition//
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    //X 0, 3, 6 condition//
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
    //X 1, 4, 7 condition//
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    //X 2, 5, 8 condition//
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    //X 6 4 2 condition//
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    //X 0 4 8 condition//
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    //O SECTION//
    //O 0 1 2 condition//
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    //O 3 4 5 condition//
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    //O 6 7 8 condition//
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 304)}
    //O 0 3 6 condition//
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    //O 1 4 7 condition//
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    //O 2 5 8 condition//
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    //O 6 4 2 condition//
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    //O 0 4 8 condition//
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    //checks for a tie, if no condition above is met and 9 squares are selected//
    //code executes//
    else if (selectedSquares.length >= 9) {
        //plays the tie game sound//
        Audio('./media/tie.mp3');
        //function sets a .3 sec timer before resetGame is called//
        setTimeout(function () { resetGame(); }, 500);
    }
    //function checks if an array includes 3 strings, used to check for each win condition//
    function arrayIncludes(squareA, squareB, squareC) {
        //vars used to check for 3 in a row//
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if 3 vars pass are all included in our array then//
        //tru is returned and else if condition executes drawLine//
        if (a === true && b === true && c === true) return true;
    }
} //tried to run in browser after this, nothing happened onclick//



//this function results in random square being selected by computer//
function computersTurn() {
    //boolean need for our while loop//
    let success = false;
    //var stores a random number 0-8//
    let pickSquare;
    //condition allows our while loop to keep trying if a square is selected already//
    while (!success) {
        //random numb between 0 and 8 is selected//
        pickSquare = String(Math.floor(Math.random()*9));
        //if random numb evaluated returns true the square hasn't been selected yet//
        if (placeXorO(pickSquare)) {
            //line calls the function//
            placeXorO(pickSquare);
            //changes boolean and ends the loop//
            success = true;
        };
    }
}

//notes://
//keep in mind js is case sensitive//
//ensure in placeXorO(squareNumber) you have used the uppercase O and not lower case o or the number 0//
//ensure you used correct casing for function names//
//make sure to have used the correct symbols and not missing any open or close curly brackets//

//part 5 notes//
// 3 functions are undefined, preventing the program from running//
// checkWinCondtions() that checks which player wins based on where X and 0 are// 
//audio() and disableClick()//
