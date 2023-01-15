import React, {useState, useEffect} from 'react'
import {task} from './task'




export function TaskList(props){


  return (
      <div>
      	{
            
           props.task.map((datos)=>{

           return (
           	    <div key={datos.id}>
                   <h1>{datos.title}</h1>
                 <h1>{datos.description}</h1>
                 <button>Eliminar</button>
                  </div> 	 
           	   	)
           })
      	}
      </div>
	)
}

