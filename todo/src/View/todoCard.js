const todosDivContainer = document.querySelector('#todosContainer');

const todoCard = (todo)=>{
    const todoContainer = document.createElement('div');
    

    const todoTitle = document.createElement('h3');
    todoTitle.textContent = todo.name;

    const todoDescription = document.createElement('p');
    todoDescription.textContent = todo.description;

    const todoDueDate = document.createElement('p');
    todoDueDate.textContent = todo.dueDate


    const todoData = document.createElement('div');
    todoData.appendChild(todoTitle);
    todoData.appendChild(todoDescription);
    todoData.appendChild(todoDueDate);

    const todoControllers = document.createElement('div');
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';

    todoControllers.appendChild(closeBtn);
    todoContainer.appendChild(todoData);
    todoContainer.appendChild(todoControllers);

    return todoContainer;
}

export const displayTodos = (project) => {
    todosDivContainer.innerHTML = ""
    project.todos.map((todo)=>{
        todosDivContainer.appendChild(todoCard(todo));
    })
}