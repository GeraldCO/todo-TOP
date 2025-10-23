

class localStorageHandler{
    updateProjects(projects){
        localStorage.setItem("projects", JSON.stringify(projects));
    }

    getProjects(){
        return JSON.parse(localStorage.getItem("projects"));
    }

    getTodos(){}
}

export const Storage = new localStorageHandler();