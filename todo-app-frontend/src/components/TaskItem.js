// import React, { useState } from 'react'
// import TaskForm from './TaskForm';

// const TaskItem = ({ id, title, description, isCompleted, removeTask, onUpdate, toggleCheck }) => {
//     const [checked, setChecked] = useState(isCompleted);
//     const [isUpdating, setIsUpdating] = useState(false);

//     const handleRemove = () => {
//         removeTask(id)
//     };

//     const handleUpdate = (task) => {
//         onUpdate(task);
//         setIsUpdating(false);
//     }

//     return (
//         <div>
//             <li>
//                 <div>
//                     <h2>{title}</h2>
//                     <p>{description}</p>
//                 </div>
//                 <div>
//                     <input type='checkbox' checked={checked} onChange={e => setChecked(!checked)} onClick={() => toggleCheck(id)} />
//                     <button onClick={() => setIsUpdating(true)}>UPDATE</button>
//                     <button onClick={handleRemove}>X</button>
//                 </div>
//             </li>
//             {isUpdating &&
//                 <TaskForm
//                     updating={isUpdating}
//                     onAdd={handleUpdate}
//                     defaultTitle={title}
//                     defaultDescription={description}
//                     defaultId={id}
//                     isCompleted={checked} />
//             }
//         </div>
//     )
// }

// export default TaskItem;

import React, { useState } from "react";
import TaskForm from "./TaskForm";
import { CardContent, Typography, Checkbox, IconButton, Box, Paper } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const TaskItem = ({ id, title, description, isCompleted, removeTask, onUpdate, toggleCheck }) => {
    const [checked, setChecked] = useState(isCompleted);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleRemove = () => {
        removeTask(id);
    };

    const handleUpdate = (task) => {
        onUpdate(task);
        setIsUpdating(false);
    };

    return (
        <Paper
            elevation={4}
            sx={{
                p: 2,
                my: 2,
                borderRadius: 2,
                maxWidth: 600,
                mx: "auto",
                bgcolor: "#fffaf0", // Light Brownish Background
                border: "2px solid #d2b48c",
            }}
        >
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#5a4a42" }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#7d6c61" }}>
                            {description}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Checkbox
                            checked={checked}
                            onChange={() => {
                                setChecked(!checked);
                                toggleCheck(id);
                            }}
                            sx={{
                                color: "#b38b6d",
                                "&.Mui-checked": { color: "#8c7051" },
                            }}
                        />
                        <IconButton
                            onClick={() => setIsUpdating(true)}
                            sx={{ color: "#8c7051", "&:hover": { color: "#5a4a42" } }}
                        >
                            <Edit />
                        </IconButton>
                        <IconButton
                            onClick={handleRemove}
                            sx={{ color: "#d9534f", "&:hover": { color: "#b52b27" } }}
                        >
                            <Delete />
                        </IconButton>
                    </Box>
                </Box>
            </CardContent>

            {isUpdating && (
                <TaskForm
                    updating={isUpdating}
                    onAdd={handleUpdate}
                    defaultTitle={title}
                    defaultDescription={description}
                    defaultId={id}
                    isCompleted={checked}
                />
            )}
        </Paper>
    );
};

export default TaskItem;
