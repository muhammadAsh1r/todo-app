import React, { useState, useEffect } from "react";
import axios from "axios";

import "./TaskList.css";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        axios.get("http://localhost:5000/api/tasks")
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.log("Error fetching tasks:", error);
            });
    };

    const toggleCompletion = (id) => {
        setTasks(tasks.map(task =>
            task._id === id ? { ...task, isCompleted: !task.isCompleted } : task
        ));
    };

    const handleRemove = (id) => {
        axios.delete(`http://localhost:5000/api/tasks/${id}`)
            .then(() => {
                setTasks(tasks.filter(task => task._id !== id));
            })
            .catch(error => {
                console.log("Error deleting task:", error);
            });
    };

    const handleAddTask = () => {

    }

    return (
        <div className="task-container">
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task._id} className={`task-item ${task.isCompleted ? "completed" : ""}`}>
                        <div className="task-info">
                            <h2 className="task-title">{task.title}</h2>
                            <p className="task-desc">{task.description}</p>
                        </div>
                        <div className="task-actions">
                            <input
                                type="checkbox"
                                className="task-checkbox"
                                checked={task.isCompleted}
                                onChange={() => toggleCompletion(task._id)}
                            />
                            <button className="task-btn update-btn">Update</button>
                            <button className="task-btn remove-btn" onClick={() => handleRemove(task._id)}>✖</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
