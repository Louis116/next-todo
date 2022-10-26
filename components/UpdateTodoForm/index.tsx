import { Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TodoTask } from "../TodoCard/type";
import { UpdateTodoDto, UpdateTodoProps } from "./type";

const UpdateTodoForm = (props: UpdateTodoProps) => {
  const { onUpdateTodobyTaskName } = props;

  const defaultInput: UpdateTodoDto = {
      name: "",
      newName: "",
      updateDate: new Date()
  };

  const { handleSubmit, control, reset, resetField } = useForm<UpdateTodoDto>({
    defaultValues: { ...defaultInput },
  });

  const onSubmit = (formValues: UpdateTodoDto) => {
    console.log("formValues", formValues);
    
    let updateTask:UpdateTodoDto={
        name: formValues.name,
        updateDate: new Date(formValues.updateDate.toISOString()),
        newName: formValues.newName
    }
    onUpdateTodobyTaskName(updateTask);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Update Task</h2>
      <div
        id="todolist"
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "16px",
        }}
      >
        <Controller
          name="name"
          control={control}
          rules={{ required: true, minLength: 1 }}
          render={({ field, fieldState }) => (
            <TextField label="Task to Update" variant="outlined" {...field} />
          )}
          
          
        />
        <Controller
          name="newName"
          control={control}
          rules={{ required: true, minLength: 1 }}
          render={({ field, fieldState }) => (
            <TextField label="Update Detail" variant="outlined" {...field} />
          )}
        />
      </div>

      <Button variant="contained" type="submit" onClick={()=>{
        resetField("name")
        resetField("newName")
      }}>
        Update
      </Button>
    </form>
  );
};

export default UpdateTodoForm;
