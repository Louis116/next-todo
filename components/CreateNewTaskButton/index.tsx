import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '@mui/material'

function CreateNewTaskButton() {
    let redir = useRouter()

    const CreateNewTask = () => {
        redir.push("todos/createnewtodo")
    }

  return (
    <Button variant="contained" onClick={() => CreateNewTask()}>Create New Task</Button>
  )
}

export default CreateNewTaskButton