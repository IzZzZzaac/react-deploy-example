import {useState, useContext} from 'react'
import {TaskContext} from '../context/taskcontext'



function Taskform() {

    const [text, setText] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const { createTask } = useContext(TaskContext)


    const handleSubmit = (e)=>{
        e.preventDefault()
        createTask(text,Descripcion)
        setText('')
        setDescripcion('')
    }

    return (
      <div className='max-w-md mx-auto'>
        <h1 className='text-2xl font-bold text-white mb-3'>Creado por Isaac Montilla</h1>
        <form onSubmit={handleSubmit} className="bg-slate-700 p-10 mb-4">
          <h2 className='text-2xl font-bold text-white mb-3'>Crea Tarea</h2>
          <input
            className='bg-slate-300 p-3 w-full mb-2  placeholder-black'
            autoFocus
            value={text}
            required={true}
            placeholder="Escribe tarea"
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <br />
          <textarea
            className='bg-slate-300 p-3 w-full mb-2 placeholder-black'
            value={Descripcion}
            required={true}
            placeholder="Escribe Descripcion"
            type="text"
            onChange={(e) => {
              setDescripcion(e.target.value);
            }}
          />
          <br />
          <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
        </form>
      </div>
    );
}

export default Taskform;
