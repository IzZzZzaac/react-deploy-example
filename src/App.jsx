import TaskList from './components/TaskList'
import Taskform from './components/Taskform'

function App() {


  return (
    <div className="p-10 bg-zinc-900 h-screen">
      <div className='container mx-auto'>
      <Taskform/>
      <TaskList/>
      </div>
    </div>
  )
}


export default App
