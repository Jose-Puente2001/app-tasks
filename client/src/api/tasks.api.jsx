import axios from 'axios'


export const getTasksRequest = async () =>
   await axios.get('http://localhost:4000/tasks')

export const createTasksRequest = async (task) => 
  await axios.post('http://localhost:4000/tasks', task)


export const deleteTasksRequest = async (id) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`)
