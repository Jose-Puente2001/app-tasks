import React, { useState, useEffect } from 'react'
import {getTasksRequest} from '../api/tasks.api'
import {TaskCard} from '../component/taskcard'

function TasksPage(){

const [tasks, setTasks] = useState([])

async function loadTasks(){

 const result =  await getTasksRequest()
 const response = result.data
 setTasks(response)
}


useEffect(()=>{

loadTasks()
  
},[])

	return(
		<div>
       <h1>Tasks</h1>
       {
           tasks.map(task =>(
                <TaskCard task={task} key={task.id}/>
           ))
       	}
       </div>
	)
}

export default TasksPage