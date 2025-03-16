import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, removeTask, onUpdate, toggleCheck }) => {
    const [filter, setFilter] = useState("all");

    const filteredTasks = tasks.filter(task =>
        filter === "completed" ? task.isCompleted :
            filter === "in-progress" ? !task.isCompleted : true
    );

    return (
        <div className="task-list">
            <select className="task-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All Tasks</option>
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
            </select>
            <ul>
                {filteredTasks.length === 0 ? <p>No task yet...</p> :
                    filteredTasks.map(task => (
                        <TaskItem key={task._id || task.id} {...task} removeTask={removeTask} onUpdate={onUpdate} toggleCheck={toggleCheck} />
                    ))}
            </ul>
        </div>
    );
};

export default TaskList;
