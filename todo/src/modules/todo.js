import {v4 as uuidv4} from 'uuid';

export default class Todo{
    constructor(projectID, name, description,  priority, dueDate){
        this.id = uuidv4();
        this.projectID = projectID;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}