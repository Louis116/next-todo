import { Button, TextField } from "@mui/material";
import dayjs from "dayjs";
import React, { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import MDateTimePicker from "../MDateTimePicker";
import { TodoTask } from "../TodoCard/type";
import { CreateTodoFormProps, TodoCreateDto } from "./type";
import { v4 as uuidv4 } from "uuid";

const defaultInput: TodoCreateDto = {
  task: "todotask",
  dueDate: dayjs(),
};
const CreateTodoForm = (props: CreateTodoFormProps) => {
  const {onCreateTodoTask} = props
  const { handleSubmit, control } = useForm<TodoCreateDto>({
    defaultValues: { ...defaultInput },
  });
  // const onSubmit = (data: any) => console.log(data);
    const onSubmit = (formValues: TodoCreateDto) => {
    console.log("formValues", formValues)
    // preprocessing before submit
    let timeNow = new Date()
    let newTask:TodoTask={
      id: uuidv4(),
      name: formValues.task,
      dueDate: new Date(formValues.dueDate.toISOString()),
      status: "abc",
      createDate: timeNow,
      updateDate: timeNow
    }
    onCreateTodoTask(newTask)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <h2>Create New Task</h2>
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
          name="task"
          control={control}
          rules={{ required: true, minLength: 1 }}
          render={({ field, fieldState }) => (
            <TextField label="Description" variant="outlined" {...field} />
          )}
        />
        <Controller
          name="dueDate"
          control={control}
          render={({ field: { onChange, ...restField } }) => (
            <MDateTimePicker
              label="End Date"
              onChange={(event) => {
                onChange(event);
              }}
              minDateTime={dayjs().add(-1, "minute")}
              {...restField}
            />
          )}
        />
        {/* <input type="submit" /> */}
        <Button variant="contained" type="submit">
          Create Task
        </Button>
      </div>
    </form>
  );
};

export default CreateTodoForm;
