import {Form, Formik} from 'formik'
import {createTasksRequest} from '../api/tasks.api'
import {useTasks} from '../context/TasksProvider'


export function TasksForm(){

const {text} = useTasks()

	return(
        <div>
        	<Formik
              initialValues={{
                 title: "",
                 description: ""
              }}
             
             onSubmit={async(values, actions)=>{
                const result = await createTasksRequest(values)
                actions.resetForm()
                console.log(result)
             }}
        	>
        	{({handleChange, handleSubmit, values})=>(
              <Form onSubmit={handleSubmit}>
        			<label>title</label>
        			<input type="text" name="title" placeholder="write a title" 
        			 onChange={handleChange} value={values.title}/>
        			<label>description</label>
        			<textarea name="description" rows="3" placeholder="write a description"
        			 onChange={handleChange} value={values.description}></textarea>
        			<button type="submit">Save</button>
        		</Form>
        	  )}
        	</Formik>
        </div>

	 )
}