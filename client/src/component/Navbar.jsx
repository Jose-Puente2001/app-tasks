import {Link} from 'react-router-dom'

export function Navbar(){
	 return(
	 <div>
       <h1>React Mysql</h1>
       <ul>
       	<li>
       		<Link to="/">Home</Link>
       	</li>
       	<li>
       		<Link to="/new">Create</Link>
       	</li>
       </ul>
       </div>
	 )
}


