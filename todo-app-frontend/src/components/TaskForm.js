import React, { useState } from 'react';


const TaskForm = ({ onAdd, updating, defaultTitle = "", defaultDescription = "", defaultId, isCompleted }) => {
    const [title, setTitle] = useState(defaultTitle);
    const [description, setDescription] = useState(defaultDescription);

    const handleSubmit = e => {
        e.preventDefault();
        onAdd({ _id: defaultId, title, description, isCompleted });
        setTitle("");
        setDescription("");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="task-form-fields">
                <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <textarea placeholder="Enter task description" value={description} onChange={e => setDescription(e.target.value)} rows={3} />
            </div>
            <button type="submit" disabled={title.length < 4 || description.length < 6}>{updating ? "UPDATE" : "ADD"}</button>
        </form>
    );
};

export default TaskForm;
