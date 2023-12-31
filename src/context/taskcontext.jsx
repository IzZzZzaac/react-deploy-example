import { createContext, useState, useEffect } from "react";
import { Tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskCP(props) {
  
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(text, descripcion) {
    setTask([
      ...tasks,
      {
        id: tasks.length,
        title: text,
        descripcion: descripcion,
      },
    ]);
  }

  function deleteTask(taskid) {
    setTask(tasks.filter((task) => task.id !== taskid));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
