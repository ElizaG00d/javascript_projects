//CURRENT ISSUES//
    //firefox has img clipping issue, works fine in chrome browser//

//BEGIN TIC TAC TOE TANGO JS//

//this var keeps track of whose turn it is//
let activePlayer = 'X';
//array stores an array of moves, use to determine win conditions//
let selectedSquares = [];

//function is for placing an x or O in a square//
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
            select.style.backgroundImage = 'url("./imgs/x.png")';
        } else {
            //if activeplayer is equal to 'O' the o.png is placed in HTML//
            select.style.backgroundImage = 'url("./imgs/o.png")';
        }
        //squareNumber and active player are concatenated together and added to the arrayt//
        selectedSquares.push(squareNumber + activePlayer);
        //calls a function to check for any win conditions//
        checkWinConditions();
        //condition is for changing the active player//
        if (activePlayer === 'X') {
            //if active player is 'X' change it to '0'.//
            activePlayer = 'O';
            //if active player is anything other than 'x'//
        } else {
            //change active player to 'x'//
            activePlayer = 'X';
        }
        //this function plays placement sound//
        audio('./media/place.mp3');
        //condition checks to see if it is the computer's turn//
        if (activePlayer === "O") {
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
        audio('./media/tie.mp3');
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
} 



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

//PART 6//
    //disableClick and computersTurn//

//function makes body element temp unclickable//
function disableClick() {
    //makes body unclickable//
    body.style.pointerEvents = 'none';
    //makes body clickable again after 1 second//
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
} //syntax error, missing ";", fixed//
    //came up as pointer-event parsing issue//

//function takes string parameter of the path set earlier for placement sound//
function audio(audioURL) {
    //create a new audio object and pass the path as a paremeter//
    let audio = new Audio(audioURL);
    //play method plays the audio sound//
    audio.play();
}

//PART 7//
    //drawWinLine called when win condition is met//

//function uses HTML canvas to draw win lines//
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //accesses HTML canvas element//
    const canvas = document.getElementById('win-lines');
    //line gives us access to methods and properties to use on canvas//
    const c = canvas.getContext('2d');
    //line indicates where start of a lines x axis is//
    let x1 = coordX1,
        //line indicates start of y axis//
        y1 = coordY1,
        //end of lines x axis is//
        x2 = coordX2,
        //end of lines x axis is//
        y2 = coordY2,
        x = x1,
        //var stores temp y axis data we update in your animation loop//
        y = y1;


    //function interacts w/ canvas//
    function animateLineDrawing() {
        //var creates a loop//
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //method clears content from last loop iteration//
        c.clearRect(0, 0, 608, 608);
        //method starts a new path//
        c.beginPath();
        //method moves us to starting point in our line//
        c.moveTo(x1, y1);
        //method indicates end point in our line//
        c.lineTo(x, y);
        //method sets width of line//
        c.lineWidth = 10;
        //method sets color+opacity of line//
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //draws everything laid out above//
        c.stroke();
        //condition checks if we've reached the endpoints//
        if (x1 <= x2 && y1 <= y2) {
            //condition adds 10 to prev end x endpoint//
            if (x < x2) { x += 10; }
            //condition adds 10 to prev end y endpoint//
            if (y < y2) {y += 10; }
            //condition is similar to the one above//
            //necessary for the 6, 4, 2 win conditions//
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop);}
        }
        //condition similar to one above//
        //necessary for 6 4 2 win conditions//
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
        }
    }

    //function clears canvas after win line is drawn//
    function clear() {
        //line starts animation loop//
        const animationLoop = requestAnimationFrame(clear);
        //clears canvas//
        c.clearRect(0, 0, 608, 608);
        //this line stops our animation loop//
        cancelAnimationFrame(animationLoop);
    }

    //line disallows clicking while the win sound is playing//
    disableClick();
    //line plays the win sounds//
    audio('./media/winGame.mp3');
    //line calls main animation loop//
    animateLineDrawing();
    //line waits 1 second, clears canvas, resets game, allows clicking again//
    setTimeout( function () { clear(); resetGame(); }, 1000);
}

    //notes://
    //checkWinConditions() checks every possible winning condition//
    //second if statement in animateLineDrawing() needed in case 6 4 2 win diagonally right to left//
    //gotta watch for those ed's//

//PART 8//
//game stuck in a loop that doesn't end, add canvas reset auto through resetGame()//

//function resets game in the event of a tie or win//
function resetGame() {
    //for loop interates through each HTML square element//
    for (let i = 0; i < 9; i++) {
        //var gets the HTML element i//
        let square = document.getElementById(String(i));
        //removes elements background image//
        square.style.backgroundImage = '';
    }
    //resets array so it is empty, can start over//
    selectedSquares = [];
}