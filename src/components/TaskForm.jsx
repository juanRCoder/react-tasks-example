import { useState, useContext } from "react";
import { TaskContext } from "../context/taskContext";

function TaskForm() {
  //dato incial y dato que actualiza
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  //al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    //Envia el dato al componente taskContext
    createTask({
      title,
      description,
    });
    //Despues de enviar limpiar el estado.
    setTitle(""), setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      {/* Enviar formulario */}
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white pb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus //para posicionarse en el input
          placeholder="Escribe tu tarea"
          // Obtiene el valor del input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          //Aqui limpiamos el valor del input con el estado incial
          value={title}
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Description ..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          //Aqui limpiamos el valor del input con el estado incial
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
