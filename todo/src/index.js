import "./styles.css"
import { createNewproject } from "./data/projectController";
import { mockTodos } from "./modules/mockdata";
import { dialogControllers } from "./data/todoController";
import { allProjects } from "./modules/projects";
import { displayProjects } from "./data/projectController";


createNewproject(allProjects);
var selectedProject;

export const updateSelectedProject = (project)=> {
    selectedProject = project;
}

export const getSelectedProject = ()=>{    
    return selectedProject;
}

// Add mock todos to each project after creation
allProjects.projects.forEach((project, idx) => {
    // Assign two todos per project for demonstration
    project.todos = mockTodos.slice(idx * 2, idx * 2 + 2);
});

dialogControllers(allProjects.addTodo, getSelectedProject);
displayProjects(allProjects);