import {useContext, useState} from 'react'
import {getTasksRequest, deleteTasksRequest} from '../api/tasks.api'
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

return(
<TasksContext.Provider value={{ tasks, loadTasks, deleteTask }}>
	{children}
</TasksContext.Provider>
)

}