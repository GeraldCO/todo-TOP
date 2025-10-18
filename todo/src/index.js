import "./styles.css"
import { Projects } from "./modules/projects";
import { createNewproject } from "./data/projectController";
import { projectsListDiv } from "./View/mainView";
import { mockTodos } from "./modules/mockdata";
import { dialogControllers } from "./data/todoController";

const allProjects = new Projects;
createNewproject(allProjects);
var selectedProject;

const updateSelectedProject = (project)=> {
    selectedProject = project;
}

const getSelectedProject = ()=>{
    return selectedProject;
}

// Add mock todos to each project after creation
allProjects.projects.forEach((project, idx) => {
    // Assign two todos per project for demonstration
    project.todos = mockTodos.slice(idx * 2, idx * 2 + 2);
});

dialogControllers(allProjects.addTodo, getSelectedProject);
allProjects.display(projectsListDiv, updateSelectedProject);