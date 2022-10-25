import { Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TodoTask } from "../TodoCard/type";
import { DeleteTodoDto, DeleteTodoFormProps } from "./types";

const DeleteTaskForm = (props: DeleteTodoFormProps) => {
  const { onDeleteTodoTaskName } = props;

  const defaultInput: DeleteTodoDto = {
    name: "",
  };

  const { handleSubmit, control } = useForm<DeleteTodoDto>({
    defaultValues: { ...defaultInput },
  });
  const onSubmit = (formValues: DeleteTodoDto) => {
    console.log("formValues", formValues);
    onDeleteTodoTaskName(formValues.name);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <h2>Delete Task</h2>
      </label>
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
            <TextField label="Task to Delete" variant="outlined" {...field} />
          )}
        />
        <Button variant="contained" type="submit">
          Delete
        </Button>
      </div>
    </form>
  );
};

export default DeleteTaskForm;
