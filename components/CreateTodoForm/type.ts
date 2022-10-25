import dayjs from "dayjs";
import { TodoTask } from "../TodoCard/type";
export interface TodoCreateDto {
  task: string;
  dueDate: dayjs.Dayjs;
}
export interface CreateTodoFormProps {
  onCreateTodoTask: (task: TodoTask) => Promise<void>;
}
