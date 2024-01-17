import { React, useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [tasks, setTask] = useState([]);
  const [editTask, setEditTask] = useState({ _id: "", description: "" });

  useEffect(() => {
    axios
      .get("http://localhost:3000/tasks")
      .then((response) => setTask(response.data))
      .catch((error) => console.error(error));
  }, [tasks]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error(error));
  };

  const handleEdit = (taskId, description) => {
    setEditTask({ _id: taskId, description });
  };

  const handleSubmitEdit = () => {
    axios
      .put(`http://localhost:3000/task/${editTask._id}`, {
        description: editTask.description,
      })
      .then((response) => {
        console.log("Task updated successfully");
        setEditTask({ _id: "", description: "" }); // Düzenleme formunu sıfırla
        fetchData(); // Yeniden veriyi çekmek için
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (taskId) => {
    axios
      .delete(`http://localhost:3000/task/${taskId}`)
      .then((response) => {
        console.log("Task deleted successfully");
        fetchData(); // Yeniden veriyi çekmek için
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.description}</h3>
            <div>
              <h3>{task.status}</h3>
            </div>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
            <button onClick={() => handleEdit(task._id, task.description)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
      {editTask._id && (
        <div>
          <h2>Edit Task</h2>
          <input
            type="text"
            value={editTask.description}
            onChange={(e) =>
              setEditTask({ ...editTask, description: e.target.value })
            }
          />
          <button onClick={handleSubmitEdit}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Home;
