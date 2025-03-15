import React, { useState } from 'react'

const TaskForm = ({ onAdd, updating, defaultTitle, defaultDescription, defaultId, isCompleted }) => {
    const [title, setTitle] = useState(defaultTitle || "");
    const [description, setDescription] = useState(defaultDescription || "");
    // const [id, setId] = useState(defaultId || 4);

    const handleSubmit = e => {
        e.preventDefault();
        if (defaultId) {
            onAdd({ _id: defaultId, title, description, isCompleted })
        } else {
            onAdd({ title, description })
        }

        setTitle("");
        setDescription("");
        // setId(id + 1);
    }

    const btn = updating ? "UPDATE" : "ADD";
    return (
        <form onSubmit={handleSubmit}>
            <input id='title' name='title' type='text' placeholder='Title' onChange={e => setTitle(e.target.value)} value={title} />
            <textarea
                id='description'
                name='description'
                className="task-form-textarea"
                placeholder="Enter task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
            />
            <button type='submit' disabled={title.length < 4 || description.length < 6}>
                {btn}
            </button>
        </form>
    )
}

export default TaskForm