import React, { useState } from "react";
import Button from "@mui/material/Button";
import PageContainer from "../../components/PageContainer";
import TodoCard from "../../components/TodoCard";
import { TodoTask } from "../../components/TodoCard/type";
let _todos: TodoTask[] = [
  {
    id: "1",
    name: "hello task1",
    dueDate: new Date(),
    status: "abc",
    createDate: new Date(),
    updateDate: new Date(),
  },
  {
    id: "2",
    name: "hello task2",
    dueDate: new Date(),
    status: "ced",
    createDate: new Date(),
    updateDate: new Date(),
  },
];

function TodoMain() {
  // [a,b,c,d]
  const [datas, setDatas] = useState<string[]>(["a", "b", "c", "d"]);
  const [todos, setTodos] = useState<TodoTask[]>([..._todos]);

  const handleCreateTask = () => {
    console.log("handleCreateTask");
    let newTodos = [...todos];
    newTodos.push({
      id: "3",
      name: "newtask3",
      dueDate: new Date(),
      status: "abc",
      createDate: new Date(),
      updateDate: new Date(),
    });
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
    let existingtodos:TodoTask[] = [...todos];
    const foundIndex = existingtodos.findIndex((e)=>{
      return e.id === task.id
    })
    const foundData = existingtodos[foundIndex]
    let newTodo:TodoTask = {
      ...foundData,
      name:"Kwan"
    }
    existingtodos[foundIndex]=newTodo
    setTodos(existingtodos)
  };

  const handleDeleteTask = (task: TodoTask) => {
    let existingtodos:TodoTask[] = [...todos];
    const foundIndex = existingtodos.findIndex((e)=>{
      return e.id === task.id

    })
    existingtodos.splice(foundIndex,1)
    setTodos(existingtodos)
  };

  return (
    <PageContainer title="Active TodoList" style={{ rowGap: "10px" }}>
      <button onClick={() => handleCreateTask()}>handleCreateTask</button>
      <button onClick={() => handleEmptyTodos()}>handleEmptyTodos</button>
      <button onClick={() => handleInitTodos()}>handleInitTodos</button>
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
          rowGap: "16px",
        }}
      >
        {/* {todos.filter(e=>{return e.id.includes("2")}).map(e=><div>{e.id}</div>)} */}
        {todos.map((todo) => {
          // if(todo.id.includes("1")){
          //   return
          // }
          return (
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
                handleDeleteTask(task)
              }}
            />
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
