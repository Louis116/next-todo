export interface TodoTask{
    id:string
    name: string
    dueDate: Date
    status: "abc" | "ced"
    createDate: Date
    updateDate: Date
}

export interface TodoCardProps{
    todoTask:TodoTask
    onComplete:(task:TodoTask)=>Promise<void>
    onArchvie:(archiveTask:TodoTask)=>Promise<void>
    onDelete:(deleteTask:TodoTask)=>Promise<void>

    
}

// export enum TodoTaskStatus{
//     A="A"
// }