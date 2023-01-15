import {Form, Formik} from 'formik'
import {createTasksRequest} from '../api/tasks.api'

export function TasksForm(){
	return(
        <div>
        	<Formik
              initialValues={{
                 title: "",
                 description: ""
              }}
             
             onSubmit={async(values)=>{
                const result = await createTasksRequest(values)
                console.log(result)
             }}
        	>
        	{({handleChange, handleSubmit})=>(
              <Form onSubmit={handleSubmit}>
        			<label>title</label>
        			<input type="text" name="title" placeholder="write a title" 
        			 onChange={handleChange}/>
        			<label>description</label>
        			<textarea name="description" rows="3" placeholder="write a description"
        			 onChange={handleChange}></textarea>
        			<button type="submit">Save</button>
        		</Form>
        	  )}
        	</Formik>
        </div>

	 )
}