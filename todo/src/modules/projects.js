import Project from "./project";
import Todo from "./todo";
import { createProjectListElement } from "../View/projectListItem";

export class Projects{

    projects = [
            new Project("Home Renovation", "2025-10-15", "High"),
            new Project("Work Presentation", "2025-09-30", "Medium"),
            new Project("Vacation Planning",  "2025-12-01", "Low")
    ]

    newProject = (project) => {
        this.projects.push(project)
    }

    addTodo = (projectID, todo) => {
        const p = projects.find((e)=> e.projectID == projectID);
        p.todos.push(todo);
    }

    newTodo = (projectID, description, status, priority) => {
        const newTodo = Todo(projectID, description, status, priority);
    }

    deleteProject = (projectID)=>{
        const p = projects.find((e) => e.projectID == projectID);
        projects.splice(p);
    }

    display = (projectsContainer) => {
        projectsContainer.innerHTML = "";
        this.projects.map((e)=>{
            projectsContainer.appendChild(createProjectListElement(e))
        });
    }
}