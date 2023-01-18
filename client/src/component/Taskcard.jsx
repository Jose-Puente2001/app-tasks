import React from 'react'
import {useTasks} from '../context/TasksProvider'

export function TaskCard({task}){

const {deleteTask, toggletaskDone} = useTasks()

const handleDone = async() => {
  await toggletaskDone(task.id)
}

	return(
      <div className="bg-slate-200 rounded-md p-4">
        <header className="flex justify-between">
          <h2 className="text-sm font-bold">{task.title}</h2>
          <span>{task.done == 1 ? "✅️" : "❌"}</span>
        </header>
       <p className="text-xs">{task.description}</p>
       <span>{task.createAt}</span>
       <div className="flex gap-x-1">
       <button className="bg-red-500 px-2 py-1 text-white" onClick={() => deleteTask(task.id)}>Delete</button>
       <button className="bg-slate-500 px-2 py-1 text-white">Edit</button>
       <button className="bg-green-500 px-2 py-1 text-white" onClick={()=> handleDone(task.done)}>Toogle Task</button>
       </div>
       </div>
     )
}
