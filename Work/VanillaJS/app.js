//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
// const todoBtn = document.getElementsByClassName('todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos());
todoButton.addEventListener("click", addTodo);
//getElementsByClassName will return a list of elements, 
//so we should use'[]' to add functions, or use for loop
// todoBtn[0].addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event){
    // console.log('function addTodo, button clicked');
    //Prevent form from submitting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //ADD TODO to localStorage
    saveLoaclTodos(todoInput.value);
    //Check mark button
    const completeButton = document.createElement('button');
    completeButton.innerText = '<i class="fas fa-check"> </i>'//will not work
    completeButton.innerHTML = '<i class="fas fa-check"> </i>'
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    //Chect trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear Todo Input Value
    todoInput.value = '';
}

function deleteCheck(e){//e same as event
    // console.log(e.target);
    const item = e.target;
    //DELETE TODO
    if(item.classList[0] === 'trash-btn'){
        // todoInput.remove();
        // item.remove();
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        // todo.remove();
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    //Check Mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    // console.log(todos);
    todos.forEach(function(todo){
        const myStyle = todo.style;
        if(myStyle !==null && myStyle !== undefined){
            switch(e.target.value){
                case 'all':
                    todo.style.display = 'flex';
                    break;
                case 'completed':
                    if(todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                case 'uncompleted':
                    if(todo.classList.contains('completed')) {
                        todo.style.display = 'none';
                    } else {
                        todo.style.display = 'flex';
                    }
                    break;
            }
        }
    });
    // // todo-List dont have porparty display, so it will return undifined
    // // we can directly choose the class = todo, this class have porperty display
    // // so we dont need to check the todo.display == undifine or not.
    // const todos = document.querySelectorAll('.todo');
    // todos.forEach(function(todo){
    //     const myStyle = todo.style;
    //     switch(e.target.value){
    //         case 'all':
    //             todo.style.display = 'flex';
    //             break;
    //         case 'completed':
    //             if(todo.classList.contains('completed')) {
    //                 todo.style.display = 'flex';
    //             } else {
    //                 todo.style.display = 'none';
    //             }
    //             break;
    //         case 'uncompleted':
    //             if(todo.classList.contains('completed')) {
    //                 todo.style.display = 'none';
    //             } else {
    //                 todo.style.display = 'flex';
    //             }
    //             break;
    //     }
    // });
}

function saveLoaclTodos(todo){
    //CHECK...if I alreay have things there
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //Create li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //Check mark button
        const completeButton = document.createElement('button');
        completeButton.innerText = '<i class="fas fa-check"> </i>'//will not work
        completeButton.innerHTML = '<i class="fas fa-check"> </i>'
        completeButton.classList.add('complete-btn');
        todoDiv.appendChild(completeButton);
        //Chect trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"> </i>'
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        //Append to list
        todoList.appendChild(todoDiv);
    })
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    // console.log(todo.childNodes[0].innerText);
    const todoIndex = todo.childNodes[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem('todos', JSON.stringify(todos));
}