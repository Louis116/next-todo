import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ToTaskListButton from "../ToTaskListButton";

function TopBar() {
  let redir = useRouter();

  const toOtherPage = (url: string) => {
    redir.push(url);
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "green" ,
      }}
    >
      <div style={{ padding: "8px" }}>
        <Button
          style={{ margin: "8px" }}
          variant="contained"
          onClick={() => {
            toOtherPage("/");
          }}
        >
          Home
        </Button>
        <Button
          style={{ margin: "8px" }}
          variant="contained"
          onClick={() => {
            toOtherPage("/todos");
          }}
        >
          To Do List
        </Button>
      </div>
    </div>
  );
}

export default TopBar;
