import {useContext} from 'react'
import {TaskContext} from '../context/taskcontext'


function taskCard({task}) {
  
  const { deleteTask } = useContext(TaskContext)

  
  return (
  <div className="bg-gray-800 text-white rounded-md p-5">
      <h2 className='text-xl font-bold capitalize'>{task.title}</h2>
      <p className='text-gray-500 text-sm' >{task.descripcion}</p>
      <button
       className='bg-red-500 px-2 py-1 rounded-md mt-4 mb-4 hover:bg-red-400'
       onClick={() => deleteTask(task.id)}>eliminar tarea</button>
    </div>
  );
}

export default taskCard;
