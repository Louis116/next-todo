import React, { useCallback, useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import MDateTimePicker from "../../../components/MDateTimePicker";
import { DateTime } from "../../../assets/types/frontend.type";

function CreateNewTodo() {
  
  interface TodoCreateDto {
    task: string
    dueDate: dayjs.Dayjs
    testDate: Date
  }
  const defaultInput: TodoCreateDto = {
    task: "todotask",
    dueDate: dayjs(),
    testDate: new Date()
  };
  const {
    register,
    handleSubmit,
    control,
    // watch,
    formState: { errors },
    reset,
  } = useForm<TodoCreateDto>({
    defaultValues: { ...defaultInput },
  });

  const [tasks, setTasks] = useState<TodoCreateDto[]>([]);

  const onSubmit = useCallback((formValues: TodoCreateDto) => {
    // preprocessing before submit
    
    let newTask = [...tasks];
    newTask.push(formValues);
    console.log(formValues);
    setTasks(newTask);
  }, []);

  return (
    <form
      onSubmit={()=>handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "64%",
        rowGap: "24px",
        alignItems: "center",
      }}
    >
      <label>
        <h2>Create New Task</h2>
      </label>
      {/* <TextField
        variant="outlined"
        fullWidth
        multiline
        required
        label="Task Name"
        type="string"
        {...register("task", { required: true })}
      /> */}
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
      {/* <Controller
        control={control}
        name={"dueDate"}
        render={({ field: { onChange, ...restField } }) => (
          <>
            <MDateTimePicker
              label="Due Date"
              onChange={(event) => {
                onChange(event);
              }}
              minDateTime={dayjs().add(-1, "minute")}
              {...restField}
            />
            <Button variant="contained" type="submit">
              Save
            </Button>
            <ToTaskListButton />
          </>
        )}
      /> */}
      <Button variant="contained" type="submit">
        Save
      </Button>
    </form>
  );
}

export default CreateNewTodo;
