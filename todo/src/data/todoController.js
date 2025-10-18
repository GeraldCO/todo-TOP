import Todo from "../modules/todo";

const openTodoDialogBtn = document.querySelector('#openTodoDialog');
const cancelTodoDialogBtn = document.querySelector('#todoCancel');
const todoDialog = document.querySelector('#todoDialog');
const newTodoForm = document.querySelector('#addTodoForm');

export const dialogControllers = (addTodo, getSelectedProject)=>{
    openTodoDialogBtn.addEventListener('click', (e)=>{
        todoDialog.setAttribute("open", "");
    });

    cancelTodoDialogBtn.addEventListener('click', ()=>{
        todoDialog.close();
    })

    newTodoForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const todoName = document.querySelector('#todoName').value;
        const todoDescription = document.querySelector('#todoDescription').value;
        const todoDueDate = document.querySelector('#todoDueDate').value;
        const todoPriority = document.querySelector('input[name="todoPriority"]').value;
        const newTodo = new Todo( todoName, todoDescription, todoPriority, todoDueDate);        
        addTodo(getSelectedProject(), newTodo);
        todoDialog.close()
    });
}