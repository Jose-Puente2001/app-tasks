import {Link} from 'react-router-dom'

export function Navbar(){
	 return(
	 <div className="bg-zinc-700 flex justify-between px-10 py-2">
       <Link to="/">
       <h1 className="text-white font-bold">App Tasks</h1>
       </Link>
       <ul className="flex">
       	<li>
       		<Link to="/" className="px-2 py-1 text-white font-bold">Home</Link>
       	</li>
       	<li>
       		<Link to="/new" className="px-2 py-1  text-white font-bold">Create</Link>
       	</li>
       </ul>
       </div>
	 )
}


