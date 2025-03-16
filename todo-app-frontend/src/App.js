import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";

const DUMMY_TASKS = [
  { id: 1, title: "Buy Grocery", description: "We have to go for grocery", isCompleted: false },
  { id: 2, title: "Do Assignment", description: "Maths Assignment", isCompleted: false },
  { id: 3, title: "Read A book", description: "Read some novels", isCompleted: false },
];

const App = () => {
  const [tasks, setTasks] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((response) => {
        setTasks(response.data || DUMMY_TASKS);
      })
      .catch((error) => {
        console.log(`Error fetching: ${error}`);
      });
  };

  const handleAdd = (task) => {
    const updatedTask = { ...task, isCompleted: false };
    axios
      .post("http://localhost:5000/api/tasks", updatedTask)
      .then((response) => {
        setTasks([...tasks, response.data]);
        navigate("/");
      })
      .catch((error) => {
        console.log(`Error adding: ${error}`);
      });
  };

  const handleRemove = (id) => {
    axios
      .delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => {
        const updatedTasks = tasks.filter((task) => task._id !== id);
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.log(`Error deleting: ${error}`);
      });
  };

  const handleUpdate = (task) => {
    axios
      .put(`http://localhost:5000/api/tasks/${task._id}`, task)
      .then(() => {
        let updatedTasks = tasks.map((t) => (t._id === task._id ? task : t));
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.log(`Error Updating: ${error}`);
      });
  };

  const handleToggle = (id) => {
    let updatedTasks = tasks.map((task) =>
      task._id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    axios
      .put(`http://localhost:5000/api/tasks/${id}`, updatedTasks.find((t) => t._id === id))
      .then(() => {
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.log(`Error Updating: ${error}`);
      });
  };

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} removeTask={handleRemove} onUpdate={handleUpdate} toggleCheck={handleToggle} />} />
        <Route path="/add-task" element={<TaskForm onAdd={handleAdd} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
