import Project from "./project";
import Todo from "./todo";
import { createProjectListElement } from "../View/projectListItem";
import { displayTodos } from "../View/todoCard";

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

    deleteProject = (project)=>{
        projects.splice(p);
    }



    display = (projectsContainer, updateSelectedProject) => {
        projectsContainer.innerHTML = "";
        this.projects.map((e)=>{
            projectsContainer.appendChild(createProjectListElement(e, updateSelectedProject));
        });
    }
}