import React, { useCallback, useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import ToTaskListButton from "../../../components/ToTaskListButton";

function CreateNewTodo() {
  interface NewTodo {
    task: "string";
    dueDate: "Date";
  }

  const { register, handleSubmit, control } = useForm<NewTodo>();
  const onSubmit = useCallback((formValues: NewTodo) => {
    console.log(formValues);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("formValues", JSON.stringify(onSubmit));
  // }, [onSubmit]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
      <TextField
        variant="outlined"
        fullWidth
        multiline
        required
        label="Task Name"
        type="string"
        {...register("task", { required: true })}
      />
      <Controller
        control={control}
        name={"dueDate"}
        render={({ field: { onChange, value } }) => (
          <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                onChange={onChange}
                value={value}
                renderInput={(params) => <TextField {...params} />}
                minDateTime={dayjs(new Date())}
                label="Due Date"
              />
            </LocalizationProvider>

            <Button variant="contained" type="submit">
              Save
            </Button>
            <ToTaskListButton />
          </>
        )}
      />
    </form>
  );
}

export default CreateNewTodo;
