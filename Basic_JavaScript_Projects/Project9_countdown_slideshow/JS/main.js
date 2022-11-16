function countdown() {
    var seconds = document.getElementById("seconds").value;
    
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //means, program pausing for 1,000 milliseconds or 1 second//
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}