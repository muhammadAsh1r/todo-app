import React, { useState, useEffect } from 'react';

import axios from "axios";

import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

const DUMMY_TASKS = [
  {
    id: 1,
    title: "Buy Grocery",
    description: "We have to go for grocery",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Do Assignment",
    description: "Maths Assignment",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Read A book",
    description: "Read some novels",
    isCompleted: false,
  },
];

const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = () => {
    axios.get("http://localhost:5000/api/tasks")
      .then(response => {
        setTasks(response.data || DUMMY_TASKS);
      })
      .catch(error => {
        console.log(`Error fetching: ${error}`);
      })
  }

  const handleAdd = task => {
    const updatedTask = { ...task, isCompleted: false };
    axios.post("http://localhost:5000/api/tasks", updatedTask)
      .then(response => {
        // console.log(response.data);
        if (tasks.length < 1) setTasks([...tasks, response.data])
        else setTasks([...tasks, response.data])
      })
      .catch(error => {
        console.log(`Error adding: ${error}`)
      })
  }

  const handleRemove = id => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(response => {
        const updatedTasks = tasks.filter(task => task._id !== id)
        setTasks(updatedTasks);
      })
      .catch(error => {
        console.log(`Error deleting: ${error}`);
      })
  };

  const handleUpdate = task => {
    axios.put(`http://localhost:5000/api/tasks/${task._id}`, task)
      .then(response => {
        let indexOfTaskToUpdate = tasks.findIndex(t => t._id === task._id)
        let updatedTasks = [...tasks];
        updatedTasks[indexOfTaskToUpdate].title = task.title;
        updatedTasks[indexOfTaskToUpdate].description = task.description;
        setTasks(updatedTasks)
      })
      .catch(error => {
        console.log(`Error Updating: ${error}`)
      })
  }

  const handleToggle = id => {
    let indexOfTaskToUpdate = tasks.findIndex(t => t._id === id)
    let updatedTasks = [...tasks];
    updatedTasks[indexOfTaskToUpdate].isCompleted = !updatedTasks[indexOfTaskToUpdate].isCompleted;
    axios.put(`http://localhost:5000/api/tasks/${id}`, {
      _id: id,
      title: tasks[indexOfTaskToUpdate].title,
      description: tasks[indexOfTaskToUpdate].description,
      isCompleted: tasks[indexOfTaskToUpdate].isCompleted,
    })
      .then(response => {
        setTasks(updatedTasks);
      })
      .catch(error => {
        console.log(`Error Updating: ${error}`)
      })
  }

  return (
    <React.Fragment>
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} removeTask={handleRemove} onUpdate={handleUpdate} toggleCheck={handleToggle} />
    </React.Fragment>
  )
}

export default App