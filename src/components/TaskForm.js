import { useState } from "react";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const { createTask, adding } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(taskName);
      alert("Tarea creada");
      setTaskName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <input
        type="text"
        value={taskName}
        name="taskName"
        onChange={(e) => setTaskName(e.target.value)}
        required
        placeholder="Escriba una tarea"
        className="form-control mb-2"
      />
      <div className="bg-dark ms-auto">
        <button disabled={adding} className="btn btn-primary btn-sm">
          {adding ? "Cargando..." : "Agregar"}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
