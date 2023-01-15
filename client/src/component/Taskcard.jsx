import React from 'react'


function TaskCard(){
	return(
        <div key={datos.id}>
                   <h1>{datos.title}</h1>
                   <h1>{datos.description}</h1>
               </div>   
	  )
}

export default TaskCard