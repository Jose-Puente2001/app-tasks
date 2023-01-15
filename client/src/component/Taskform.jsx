import React, {useState} from 'react'

export function TaskForm({createTask}){

 const [title, setTitle] = useState('')
 const [description, setDescription] = useState('')

 const handleSubmit = (e)=>{
 	e.preventDefault()

 	createTask(title, description)
 }

	return(
	  <form onSubmit={handleSubmit}>
      <input placeholder="Añade una tarea" onChange={(e)=> setTitle(e.target.value)}/>
      <textarea name="postContent" rows={4} cols={40} onChange={(e)=> setDescription(e.target.value)} />
      <button>Guardar</button>
      </form>
	)
}