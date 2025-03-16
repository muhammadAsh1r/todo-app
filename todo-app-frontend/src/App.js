import React, { useState, useEffect } from 'react';
import axios from "axios";
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const DUMMY_TASKS = [
  { id: 1, title: "Buy Grocery", description: "We have to go for grocery", isCompleted: false },
  { id: 2, title: "Do Assignment", description: "Maths Assignment", isCompleted: false },
  { id: 3, title: "Read A book", description: "Read some novels", isCompleted: false },
];

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get("http://localhost:5000/api/tasks")
      .then(response => setTasks(response.data || DUMMY_TASKS))
      .catch(error => console.log(`Error fetching: ${error}`));
  };

  const handleAdd = task => {
    const updatedTask = { ...task, isCompleted: false };
    axios.post("http://localhost:5000/api/tasks", updatedTask)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.log(`Error adding: ${error}`));
  };

  const handleRemove = id => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task._id !== id)))
      .catch(error => console.log(`Error deleting: ${error}`));
  };

  const handleUpdate = task => {
    axios.put(`http://localhost:5000/api/tasks/${task._id}`, task)
      .then(() => {
        setTasks(tasks.map(t => (t._id === task._id ? task : t)));
      })
      .catch(error => console.log(`Error Updating: ${error}`));
  };

  const handleToggle = id => {
    setTasks(tasks.map(task => task._id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  return (
    <div className="app-container">
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} removeTask={handleRemove} onUpdate={handleUpdate} toggleCheck={handleToggle} />
    </div>
  );
};

export default App;
