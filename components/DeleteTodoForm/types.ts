import { TodoTask } from "../TodoCard/type";

export interface DeleteTodoFormProps {
  onDeleteTodoTaskName: (taskName: string) => Promise<void>;
}

export interface DeleteTodoDto{
    name: string
}