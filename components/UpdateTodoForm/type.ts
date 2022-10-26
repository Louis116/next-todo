import { TodoTask } from "../TodoCard/type";

export interface UpdateTodoProps{
    onUpdateTodobyTaskName :(task:UpdateTodoDto) => Promise<void>;
}

export interface UpdateTodoDto{
    name: string
    newName: string
    updateDate: Date
}