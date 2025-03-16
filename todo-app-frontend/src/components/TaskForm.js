// import React, { useState } from 'react';

// import "../styles/TaskForm.css"

// const TaskForm = ({ onAdd, updating, defaultTitle, defaultDescription, defaultId, isCompleted }) => {
//     const [title, setTitle] = useState(defaultTitle || "");
//     const [description, setDescription] = useState(defaultDescription || "");

//     const handleSubmit = e => {
//         e.preventDefault();
//         if (defaultId) {
//             onAdd({ _id: defaultId, title, description, isCompleted });
//         } else {
//             onAdd({ title, description });
//         }

//         setTitle("");
//         setDescription("");
//     };

//     const btnText = updating ? "UPDATE" : "ADD";

//     return (
//         <form className="task-form" onSubmit={handleSubmit}>
//             <div className="task-form-fields">
//                 <input
//                     id="title"
//                     name="title"
//                     type="text"
//                     className="task-form-input"
//                     placeholder="Title"
//                     onChange={e => setTitle(e.target.value)}
//                     value={title}
//                 />
//                 <textarea
//                     id="description"
//                     name="description"
//                     className="task-form-textarea"
//                     placeholder="Enter task description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     rows={3}
//                 />
//             </div>
//             <button
//                 type="submit"
//                 className="task-form-button"
//                 disabled={title.length < 4 || description.length < 6}
//             >
//                 {btnText}
//             </button>
//         </form>
//     );
// };

// export default TaskForm;

import React, { useState } from "react";
import { TextField, Button, Paper, Box } from "@mui/material";

const TaskForm = ({ onAdd, updating, defaultTitle, defaultDescription, defaultId, isCompleted }) => {
    const [title, setTitle] = useState(defaultTitle || "");
    const [description, setDescription] = useState(defaultDescription || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (defaultId) {
            onAdd({ _id: defaultId, title, description, isCompleted });
        } else {
            onAdd({ title, description });
        }

        setTitle("");
        setDescription("");
    };

    const btnText = updating ? "UPDATE" : "ADD";

    return (
        <Paper
            elevation={6}
            sx={{
                p: 3,
                maxWidth: 500,
                mx: "auto",
                my: 3,
                bgcolor: "#fffaf0", // Light Brownish Background
                borderRadius: 2,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                border: "2px solid #d2b48c", // Light Brown Border
            }}
        >
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{
                            bgcolor: "white",
                            borderRadius: "8px",
                        }}
                    />
                    <TextField
                        label="Enter task description"
                        variant="outlined"
                        multiline
                        rows={3}
                        fullWidth
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{
                            bgcolor: "white",
                            borderRadius: "8px",
                        }}
                    />
                </Box>
                <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={title.length < 4 || description.length < 6}
                        sx={{
                            bgcolor: "#b38b6d",
                            color: "white",
                            fontWeight: "bold",
                            px: 3,
                            py: 1,
                            borderRadius: "8px",
                            "&:hover": { bgcolor: "#a0755a", transform: "scale(1.05)" },
                            "&:disabled": { bgcolor: "#d2b48c" },
                        }}
                    >
                        {btnText}
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default TaskForm;
