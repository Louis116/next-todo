import React from "react";
import Typography from "@mui/material/Typography";
import { TodoCardProps, TodoTask } from "./type";
import { Button } from "@mui/material";
import { height } from "@mui/system";

function TodoCard(props: TodoCardProps) {
  const { todoTask, onComplete, onArchvie, onDelete } = props;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "lightyellow",
          columnGap: "24px",
          alignItems:"center",
          
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "yellow",
          }}
        >
          <Typography variant="h3">{todoTask.name}</Typography>
          <Typography variant="h5">
            {todoTask.dueDate.toISOString()}
          </Typography>
        </div>
        <Button variant="contained" color="primary" style={{maxHeight:"50px"}} onClick={()=>onComplete(todoTask)}>
          Complete
        </Button>
        <Button variant="contained" color="secondary" style={{maxHeight:"50px"}} onClick={()=>onArchvie(todoTask)} >
          Archive
        </Button>
        <Button variant="contained" color="error" style={{maxHeight:"50px"}}onClick={()=>onDelete(todoTask)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TodoCard;
