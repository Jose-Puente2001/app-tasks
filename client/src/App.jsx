import { Route, Routes } from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import {TasksForm} from './pages/TasksForm'
import {NoutFound} from './pages/NoutFound'
import {Navbar} from './component/Navbar'
import {TasksContextProvider} from './context/TasksProvider'

function App() {

   return(
  <TasksContextProvider>
   <Navbar/>
      <Routes>
        <Route path="/" element={<TasksPage/>}/>
        <Route path="/new" element={<TasksForm/>}/>
        <Route path="*" element={<NoutFound/>}/>
      </Routes>
      </TasksContextProvider>   
    )
}

export default App
