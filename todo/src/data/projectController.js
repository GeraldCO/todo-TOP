import { addNewProject } from "../View/mainView";
import { projectsListDiv } from "../View/mainView";

const newProjectForm = document.querySelector('#addProjectForm');

export const  createNewproject = (allProjects)=>{
    newProjectForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    allProjects.newProject(addNewProject());
    allProjects.display(projectsListDiv);
});
}

