import { v4 as uuidv4} from 'uuid';

export default class Project{
    todos = []

    constructor(name,  dueDate, priority){
        this.id = uuidv4();
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    changePriority(newPriority){
        this.priority = newPriority;
    }

    changeStatus(newStatus){
        this.status = newStatus;
    }
}