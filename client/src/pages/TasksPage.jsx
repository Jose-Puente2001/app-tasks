import React, {useEffect} from 'react'
import {TaskCard} from '../component/taskcard'
import {useTasks} from '../context/TasksProvider'

function TasksPage(){

const {tasks, loadTasks} = useTasks()

useEffect(()=>{

loadTasks()
  
},[])

const renderMain = () => {

  if (tasks.length == 0) return <h1>No tasks yet</h1>
  return tasks.map(task => <TaskCard task={task} key={task.id}/>);
}

	return(
		<div>
       <h1 className="text-5xl text-white fond-bold text-center">Tasks</h1>
       <div className="grid grid-cols-3 gap-2 mt-4">
       	{renderMain()}
       </div>
       </div>
	)
}

export default TasksPage