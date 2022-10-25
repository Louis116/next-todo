import { TodoTask } from "../TodoCard/type";

export interface FilterTodoFormProps {
  onFilterTodoTaskName: (taskName: string) => Promise<void>;
  onResetFilter: () => void;
}

export interface FilterTodoDto{
    name: string

}

