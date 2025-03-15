import React, { useState } from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, removeTask, onUpdate, toggleCheck }) => {
    const [filter, setFilter] = useState("all");
    const handleRemove = id => {
        removeTask(id);
    }

    const handleUpdate = task => {
        onUpdate(task);
    }

    const handleToggle = id => {
        toggleCheck(id);
    }

    let filteredTasks = tasks;
    if (filter === "completed") {
        filteredTasks = tasks.filter(task => task.isCompleted === true)
    }
    if (filter === "in-progress") {
        filteredTasks = tasks.filter(task => task.isCompleted === false)
    }

    return (
        <div>
            <select
                name="task-filter"
                id="task-filter"
                className="task-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="all">All Tasks</option>
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
            </select>
            <ul>
                {!filteredTasks.length > 0 ? <p>No task yet..</p>
                    : filteredTasks.map(task =>
                        <TaskItem
                            key={task._id || task.id}
                            id={task._id || task._id}
                            title={task.title}
                            description={task.description}
                            isCompleted={task.isCompleted}
                            removeTask={handleRemove}
                            onUpdate={handleUpdate}
                            toggleCheck={handleToggle}
                        />
                    )

                }
            </ul>
        </div>
    )
}

export default TaskList