import { useContext } from "react";
import { TaskContext } from "../context/taskContext";
import TaskCard from "./TaskCard";

function Tasklist() {
  //Ya no uso props si no traigo las tareas desde el TaskContext
  const {tasks} = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => {
        return <TaskCard task={task} key={task.id} />;
      })}
    </div>
  );
}

export default Tasklist;
