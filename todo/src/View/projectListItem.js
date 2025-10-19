import { displayTodos } from "./todoCard";

export const createProjectListElement = (project, updateSelectedProject, deleteProject)=> {
    const projectListElementContainer = document.createElement('div');
    const projectName = document.createElement('span');
    const closeBtn = document.createElement('button');
    closeBtn.textContent = "x";
    projectName.textContent = project.name;
    projectListElementContainer.appendChild(projectName);
    projectListElementContainer.appendChild(closeBtn);

    projectListElementContainer.addEventListener('click', (e)=>{
        document.querySelector('#selectedProjecTitle').textContent = "Task for: " + project.name;
        updateSelectedProject(project);
        displayTodos(project);
    });

    closeBtn.addEventListener('click', ()=>{
        deleteProject();
    });

    return projectListElementContainer;
}