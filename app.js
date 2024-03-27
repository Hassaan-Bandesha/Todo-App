// Calling HTML
const todoInput = document.querySelector('#todo');
const ol = document.querySelector('ol');
const arr = [];

// Render Function
function renderTodo() {
    ol.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `
        <li>${arr[i]}
        <button onclick="deleteTodo(${i})" id="deletebtn">Delete</button>
        <button onclick="editTodo(${i})" id="editbtn">Edit</button>
        </li>
        `
    }
}

//  Add Function
function addTodo() {
    arr.push(todoInput.value);
    renderTodo()
    todoInput.value = ''
}

//  Delete Function
function deleteTodo(index) {
    arr.splice(index, 1);
    renderTodo()
}

//  Edit Function
function editTodo(index) {
    const updatedVal = prompt('enter updated value');
    arr.splice(index , 1 , updatedVal);
    renderTodo()
}