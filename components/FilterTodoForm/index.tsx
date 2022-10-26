import { Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TodoTask } from "../TodoCard/type";
import { FilterTodoDto, FilterTodoFormProps } from "./types";

const FilterTaskForm = (props: FilterTodoFormProps) => {
  const { onFilterTodoTaskName, onResetFilter } = props;

  const defaultInput: FilterTodoDto = {
    name: "",
  };

  const { handleSubmit, control, reset, resetField } = useForm<FilterTodoDto>({
    defaultValues: { ...defaultInput },
  });

  const onSubmit = (formValues: FilterTodoDto) => {
    console.log("formValues", formValues);
    onFilterTodoTaskName(formValues.name);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <h2>Filter Task</h2>
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
            <TextField label="Task to Filter" variant="outlined" {...field} />
          )}
        />
        <Button variant="contained" type="submit">
          Filter
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            onResetFilter();
            resetField("name");
          }}
        >
          Reset Filter
        </Button>
      </div>
    </form>
  );
};

export default FilterTaskForm;
