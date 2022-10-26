import React, { useCallback, useState } from "react";
import Button from "@mui/material/Button";
import PageContainer from "../../components/PageContainer";
import TodoCard from "../../components/TodoCard";
import { TodoTask } from "../../components/TodoCard/type";
import CreateNewTodo from "./createnewtodo";
import CreateTodoForm from "../../components/CreateTodoForm";
import DeleteTaskForm from "../../components/DeleteTodoForm";
import FilterTaskForm from "../../components/FilterTodoForm";
import UpdateTodoForm from "../../components/UpdateTodoForm";
import { UpdateTodoDto } from "../../components/UpdateTodoForm/type";
import { margin } from "@mui/system";

let _todos: TodoTask[] = [
  {
    id: "1",
    name: "hello task1",
    dueDate: new Date("2022-10-25"),
    status: "abc",
    createDate: new Date("2022-10-20"),
    updateDate: new Date("2022-10-20"),
  },
  {
    id: "2",
    name: "hello task2",
    dueDate: new Date("2022-10-26"),
    status: "ced",
    createDate: new Date("2022-10-21"),
    updateDate: new Date("2022-10-21"),
  },
];

function TodoMain() {
  const [datas, setDatas] = useState<string[]>(["a", "b", "c", "d"]);
  const [todos, setTodos] = useState<TodoTask[]>([..._todos]);
  const [filter, setFilter] = useState<string | null>(null);

  const handleCreateTask = (task: TodoTask) => {
    console.log("handleCreateTask", task);
    let newTodos = [...todos];
    newTodos.push(task);
    setTodos(newTodos);
  };

  const handleEmptyTodos = () => {
    setTodos([]);
  };

  const handleInitTodos = () => {
    let defaultTodos: TodoTask[] = [..._todos];
    setTodos(defaultTodos);
  };

  const handleUpdateTask = (task: TodoTask) => {
    let existingtodos: TodoTask[] = [...todos];
    const foundIndex = existingtodos.findIndex((e) => {
      return e.id === task.id;
    });
    const foundData = existingtodos[foundIndex];
    let newTodo: TodoTask = {
      ...foundData,
      name: "Kwan",
    };
    existingtodos[foundIndex] = newTodo;
    setTodos(existingtodos);
  };

  const handleDeleteTask = (task: TodoTask) => {
    let existingtodos: TodoTask[] = [...todos];
    const foundIndex = existingtodos.findIndex((e) => {
      return e.id === task.id;
    });
    existingtodos.splice(foundIndex, 1);
    setTodos(existingtodos);
  };

  const handleDeleteByTaskName = (taskName: string) => {
    let result = todos.filter((deleteTask) => deleteTask.name !== taskName);
    setTodos(result);
  };

  const handleFilterByTaskName = (taskName: string) => {
    // let result = todos.filter(filterTask => filterTask.name.includes(taskName))
    setFilter(taskName);
  };

  const handleResetFilter = () => {
    setFilter(null);
  };

  const handleUpdateByTaskName = (updateTask: UpdateTodoDto) => {
    let existingtodos: TodoTask[] = [...todos];
    const foundName = existingtodos.findIndex((e) => {
      return e.name === updateTask.name;
    });
    try {
      let foundTask = existingtodos[foundName];
      foundTask = {
        id: foundTask.id,
        name: updateTask.newName,
        dueDate: foundTask.dueDate,
        status: foundTask.status,
        createDate: foundTask.createDate,
        updateDate: updateTask.updateDate,
      };

      console.log(existingtodos[foundName]);
      existingtodos.splice(foundName, 1);
      existingtodos.unshift(foundTask);
      setTodos(existingtodos);
      console.log(foundTask);
    } catch (e) {
      console.log("Task Name not found");
    }
  };

  return (
    <PageContainer title="Active TodoList" style={{ rowGap: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          backgroundColor: "lightblue",
          columnGap: "10px",
          width: "100%",
        }}
      >
        <Button variant="contained" type="submit">
          CreateTask
        </Button>
        <Button variant="contained" onClick={() => handleEmptyTodos()}>
          EmptyTodos
        </Button>
        <Button variant="contained" onClick={() => handleInitTodos()}>
          InitTodos
        </Button>
      </div>

      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          backgroundColor: "lightblue",
          width: "100%",
        }}
      >
        <Button variant="contained">Create</Button>
      </div> */}

      <div
        id="todolist"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CreateTodoForm
          onCreateTodoTask={async function (task: TodoTask): Promise<void> {
            console.log("onCreateTodoTask", task);
            handleCreateTask(task);
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "centre",
            columnGap: "10px",
            width: "100%",
          }}
        >
          <DeleteTaskForm
            onDeleteTodoTaskName={async function (task: string): Promise<void> {
              handleDeleteByTaskName(task);
              console.log(task);
            }}
          />
          <FilterTaskForm
            onFilterTodoTaskName={async function (
              taskName: string
            ): Promise<void> {
              handleFilterByTaskName(taskName);
            }}
            onResetFilter={function (): void {
              handleResetFilter();
            }}
          />
        </div>
        <UpdateTodoForm
          onUpdateTodobyTaskName={async function (
            task: UpdateTodoDto
          ): Promise<void> {
            console.log(task);
            handleUpdateByTaskName(task);
          }}
        />
        {/* {todos.filter(e=>{return e.id.includes("2")}).map(e=><div>{e.id}</div>)} */}
        {todos.map((todo) => {
          if (filter !== null && !todo.name.includes(filter)) {
            return;
          }
          return (
            <div style={{
              padding: "16px",
            }}>
            <TodoCard
              key={todo.id}
              todoTask={todo}
              onComplete={async (task) => {
                console.log("onComplete", task);
              }}
              onArchvie={async (task) => {
                console.log("onArchvie", task);
              }}
              onDelete={async (task) => {
                console.log("onDelete", task);
                handleDeleteTask(task);
              }}
            />
            </div>
          );
        })}
      </div>
      {/* <TodoCard
        todoTask={data}
        onComplete={async (task) => {
          console.log("onComplete", task);
        }}
        onArchvie={async(task)=>{
          console.log("onArchvie", task);
        }}
        onDelete={async(task)=>{
          console.log("onDelete", task);
        }}
      /> */}
      {/* <Button variant="contained">Hello World</Button> */}
    </PageContainer>
  );
}

export default TodoMain;
