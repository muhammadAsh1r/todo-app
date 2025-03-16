import React, { useState } from 'react';
import TaskForm from './TaskForm';

const TaskItem = ({ id, title, description, isCompleted, removeTask, onUpdate, toggleCheck }) => {
    const [isUpdating, setIsUpdating] = useState(false);

    return (
        <li className="task-item">
            <div className="task-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="task-actions">
                <input type="checkbox" checked={isCompleted} onChange={() => toggleCheck(id)} />
                <button onClick={() => setIsUpdating(true)}>UPDATE</button>
                <button onClick={() => removeTask(id)}>X</button>
            </div>
            {isUpdating && <TaskForm updating onAdd={onUpdate} defaultTitle={title} defaultDescription={description} defaultId={id} isCompleted={isCompleted} />}
        </li>
    );
};

export default TaskItem;
