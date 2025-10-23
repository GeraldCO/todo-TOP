import Project from "./project";
import Todo from "./todo";
import { displayTodos } from "../View/todoCard";
import { getSelectedProject } from "../index";
import { projectsListDiv } from "../View/mainView";
import { Storage } from "../data/localStorage/localStorageHandler";


export class Projects{

    projects = [
            new Project("Home Renovation", "2025-10-15", "High"),
            new Project("Work Presentation", "2025-09-30", "Medium"),
            new Project("Vacation Planning",  "2025-12-01", "Low")
    ];

    newProject = (project) => {
        this.projects.push(project);
        Storage.updateProjects(this.projects);
    }

    addTodo = (project, todo) => {
        project.todos.push(todo);
        displayTodos(project);        
    }

    getAllProjects(){
        return this.projects;
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

    
}

export const allProjects = new Projects();