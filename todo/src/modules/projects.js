import Project from "./project";
import Todo from "./todo";
import { createProjectListElement } from "../View/projectListItem";
import { displayTodos } from "../View/todoCard";
import { getSelectedProject } from "../index";
import { projectsListDiv } from "../View/mainView";


export class Projects{

    projects = [
            new Project("Home Renovation", "2025-10-15", "High"),
            new Project("Work Presentation", "2025-09-30", "Medium"),
            new Project("Vacation Planning",  "2025-12-01", "Low")
    ];

    newProject = (project) => {
        this.projects.push(project);
    }

    addTodo = (project, todo) => {
        project.todos.push(todo);
        displayTodos(project);        
    }

    removeTodo = (project, todo)=>{
        
    }

    newTodo = (projectID, description, status, priority) => {
        const newTodo = Todo(projectID, description, status, priority);
    }

    deleteProject = ()=>{
        const index = this.projects.findIndex((currentValue) => {
            return currentValue == getSelectedProject();
        });
        this.projects.splice(index, 1);
        this.display(projectsListDiv);
    }



    display = (projectsContainer) => {
        projectsContainer.innerHTML = "";
        this.projects.map((e)=>{
            projectsContainer.appendChild(createProjectListElement(e, this.deleteProject ));
        });
    }
}