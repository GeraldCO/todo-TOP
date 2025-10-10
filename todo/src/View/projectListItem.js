const todoDisplayArea = document.querySelector("#todo-display-area");

export const createProjectListElement = (project)=> {
    const projectListElementContainer = document.createElement('div');
    const projectName = document.createElement('span');
    const closeBtn = document.createElement('button');
    closeBtn.textContent = "x";
    projectName.textContent = project.name;
    projectListElementContainer.appendChild(projectName);
    projectListElementContainer.appendChild(closeBtn);

    projectListElementContainer.addEventListener('click', (e)=>{
        todoDisplayArea.firstElementChild.textContent = "Task for: " + project.name;
    })
    return projectListElementContainer;
}