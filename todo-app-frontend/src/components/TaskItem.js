import React, { useState } from 'react'
import TaskForm from './TaskForm';

const TaskItem = ({ id, title, description, isCompleted, removeTask, onUpdate, toggleCheck }) => {
    const [checked, setChecked] = useState(isCompleted);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleRemove = () => {
        removeTask(id)
    };

    const handleUpdate = (task) => {
        onUpdate(task);
        setIsUpdating(false);
    }

    return (
        <li>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                <input type='checkbox' checked={checked} onChange={e => setChecked(!checked)} onClick={() => toggleCheck(id)} />
                <button onClick={() => setIsUpdating(true)}>UPDATE</button>
                <button onClick={handleRemove}>X</button>
            </div>
            {isUpdating &&
                <TaskForm
                    updating={isUpdating}
                    onAdd={handleUpdate}
                    defaultTitle={title}
                    defaultDescription={description}
                    defaultId={id}
                    isCompleted={checked} />
            }
        </li>
    )
}

export default TaskItem