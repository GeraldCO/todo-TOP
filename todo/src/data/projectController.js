import { addNewProject } from "../View/mainView";
import { projectsListDiv } from "../View/mainView";
import { allProjects } from "../modules/projects";
import { createProjectListElement } from "../View/projectListItem";


const newProjectForm = document.querySelector('#addProjectForm');

export const displayProjects = (projects) => {
    projectsListDiv.innerHTML = "";
    projects.map((e)=>{
        projectsListDiv.appendChild(createProjectListElement(e, allProjects.deleteProject ));
    });
}

export const  createNewproject = ()=>{
    newProjectForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    allProjects.newProject(addNewProject());
    displayProjects(projectsListDiv, allProjects.getAllProjects());
});
}

