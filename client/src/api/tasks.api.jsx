import axios from 'axios'


export const createTasksRequest = async (task) => 
  await axios.post('http://localhost:4000/tasks', task)
