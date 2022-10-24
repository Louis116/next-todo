import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '@mui/material'

function ToTaskListButton() {
    let redir = useRouter()

    const ToTaskList = () => {
        redir.push("/todos")
    }

  return (
    <Button variant="contained" onClick={() => ToTaskList()}>To Task List</Button>
  )
}

export default ToTaskListButton