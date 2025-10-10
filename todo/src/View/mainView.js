export const projectsListDiv = document.querySelector('#projects-list');
import Project from "../modules/project";

export const addNewProject = () => {
    const projectName = document.querySelector('#name').value;
    const projectDueDate = document.querySelector('#dueDate').value;
    const projectPriority = document.querySelector('#priority').value;
    const newProject = new Project(projectName, projectDueDate, projectPriority);
    return newProject;
}

export const taskBody = (todo) => {
    const todoContainer = document.createElement('div');
    const todoTitle = document.createElement('h4');
    todoTitle.textContent = todo.name;
    const todoDescription = document.createElement('p');
    const dueDate = document.createElement('span');
    todoContainer.dataset.priority = todo.priority;
    todoTitle.textContent = todo.name;
    todoDescription.textContent = todo.description;
    dueDate.textContent = "Due: " + todo.dueDate;

    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDescription);
    todoContainer.appendChild(dueDate);

    return todoContainer;
}