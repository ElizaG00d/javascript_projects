//CURRENT ISSUES//
    //remove function only removes the button above//
    //can also only happen once apparently//
    //does not work really at all in vivaldi//

//function gets task from input//
function get_todos() {
    //creates array from inputs//
    var todos = new Array;
    //pulls the task that was saved in browser memory//
    var todos_str = localStorage.getItem('todo');
    //if input not null//
    //json.parse will comm w browser to make js object//
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//function adds inputed task to the get_todos func array//
function add() {
    //takes inputted task, creates var of it//
    var task = document.getElementById('task').value;

    var todos = get_todos();
    //adds new task to end of array//
    todos.push(task);
    //converts task input to json string//
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();
    
    return false;
}

//function keeps tasks permanantly displayed//
function show() {
    //sets task retrieved as var//
    var todos = get_todos();

    //sets up each task as ul//
    var html = "<ul>";
    //displays task to todo list in the order inputed//
    for (var i = 0; i < todos.length; i++) {
        //also displays the task as a list and creates the button with the "x"//
        html += '<li>' + todos[i] + '<button class="remove"' + i + '>x</button>';

    };
    html += '</ul>';
    //displays taks as a list//
    document.getElementById('todos').innerHTML = html;
}
//displays inputted task when 'add item' button is clicked//
document.getElementById('add').addEventListener('click', add);
//will keep inputs displayed permanantly on screen//
show();

//add ability to remove a todo item from the list when user clicks on the button to the right of each item//
//click the x and the item should disappear//

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1); //did figure on this method
    localStorage.setItem('todo', JSON.stringify(todos));
    //looks in the show how to display a removed item on the screen//
    show();
    
    return false;
} 

var btn = document.getElementsByClassName('remove');
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', remove);
}; //display after//



