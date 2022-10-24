import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, updateTasks } = useTasks();

  const handleDelete = async (id) => {
    await deleteTask(id);
  };

  const handleToggleDone = async (id, doneState) => {
    await updateTasks(id, { done: !doneState });
  };

  return (
    <div className="card card-body">
      <h3 className="h5">
        {task.id}. {task.name}
      </h3>
      <span>{task.done ? "Hecha" : "No hecha"}</span>
      <div className="ms-auto">
        <button
          onClick={() => handleDelete(task.id)}
          className="btn btn-danger btn-sm me-1"
        >
          Borrar
        </button>
        <button
          onClick={() => handleToggleDone(task.id, task.done)}
          className="btn btn-secondary btn-sm"
        >
          Hacer
          
        </button>
      </div>
    </div>
  );
}

export default TaskCard;