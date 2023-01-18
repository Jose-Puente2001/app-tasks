import {useContext, useState} from 'react'
import {getTasksRequest, deleteTasksRequest, toogleTasksDoneRequest} from '../api/tasks.api'
import {TasksContext} from './TasksContext'


export const useTasks = () =>  {
 const context = useContext(TasksContext)
  if(!context){
 	throw new Error("useTasks must be used within a TasksContextProvider")
 }
 return context
}


export const TasksContextProvider = ({ children }) => {

const [tasks, setTasks] = useState([])

async function loadTasks(){

 const result =  await getTasksRequest()
 const response = result.data
 setTasks(response)

}

 const deleteTask = async (id) => {
    try {
      const response = await deleteTasksRequest(id)
      const newItems = tasks.filter(task => task.id !== id)
      setTasks(newItems)
    } catch (error) {
      console.error(error);
    }
 }

const toggletaskDone = async(id) => {
  const tasksFound = tasks.find(task => task.id == id)
  await toogleTasksDoneRequest(id, tasksFound.done == 0 ? true : false)
  setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      )
} 


return(
<TasksContext.Provider 
value={{ 
tasks, 
loadTasks, 
deleteTask, 
toggletaskDone 
}}
>
	{children}
</TasksContext.Provider>
)

}