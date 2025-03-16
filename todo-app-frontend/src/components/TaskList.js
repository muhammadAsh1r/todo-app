// import React, { useState } from 'react'
// import TaskItem from './TaskItem'

// const TaskList = ({ tasks, removeTask, onUpdate, toggleCheck }) => {
//     const [filter, setFilter] = useState("all");
//     const handleRemove = id => {
//         removeTask(id);
//     }

//     const handleUpdate = task => {
//         onUpdate(task);
//     }

//     const handleToggle = id => {
//         toggleCheck(id);
//     }

//     let filteredTasks = tasks;
//     if (filter === "completed") {
//         filteredTasks = tasks.filter(task => task.isCompleted === true)
//     }
//     if (filter === "in-progress") {
//         filteredTasks = tasks.filter(task => task.isCompleted === false)
//     }

//     return (
//         <div>
//             <select
//                 name="task-filter"
//                 id="task-filter"
//                 className="task-filter"
//                 value={filter}
//                 onChange={(e) => setFilter(e.target.value)}
//             >
//                 <option value="all">All Tasks</option>
//                 <option value="completed">Completed</option>
//                 <option value="in-progress">In Progress</option>
//             </select>
//             <ul>
//                 {!filteredTasks.length > 0 ? <p>No task yet..</p>
//                     : filteredTasks.map(task =>
//                         <TaskItem
//                             key={task._id || task.id}
//                             id={task._id || task._id}
//                             title={task.title}
//                             description={task.description}
//                             isCompleted={task.isCompleted}
//                             removeTask={handleRemove}
//                             onUpdate={handleUpdate}
//                             toggleCheck={handleToggle}
//                         />
//                     )

//                 }
//             </ul>
//         </div>
//     )
// }

// export default TaskList

import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { Box, FormControl, InputLabel, MenuItem, Select, Typography, Paper, Container } from "@mui/material";

const TaskList = ({ tasks, removeTask, onUpdate, toggleCheck }) => {
    const [filter, setFilter] = useState("all");

    const handleRemove = (id) => {
        removeTask(id);
    };

    const handleUpdate = (task) => {
        onUpdate(task);
    };

    const handleToggle = (id) => {
        toggleCheck(id);
    };

    let filteredTasks = tasks;
    if (filter === "completed") {
        filteredTasks = tasks.filter((task) => task.isCompleted === true);
    }
    if (filter === "in-progress") {
        filteredTasks = tasks.filter((task) => task.isCompleted === false);
    }

    return (
        <Container
            maxWidth="lg"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 3,
                width: "100%",
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    p: 4,
                    width: "100%",
                    maxWidth: "900px",
                    borderRadius: 3,
                    bgcolor: "#fffaf0", // Light Brownish Background
                    border: "2px solid #d2b48c",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                {/* Filter Dropdown */}
                <Box sx={{ mb: 3, width: "100%" }}>
                    <FormControl fullWidth>
                        <InputLabel id="task-filter-label" sx={{ color: "#8c7051", fontWeight: "bold" }}>
                            Filter Tasks
                        </InputLabel>
                        <Select
                            labelId="task-filter-label"
                            id="task-filter"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            sx={{
                                bgcolor: "white",
                                borderRadius: 2,
                                "& .MuiOutlinedInput-notchedOutline": { borderColor: "#d2b48c" },
                                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#a67c52" },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#8c7051" },
                            }}
                        >
                            <MenuItem value="all">All Tasks</MenuItem>
                            <MenuItem value="completed">Completed</MenuItem>
                            <MenuItem value="in-progress">In Progress</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Task Items */}
                {filteredTasks.length === 0 ? (
                    <Typography sx={{ color: "#8c7051", textAlign: "center", fontSize: "1.1rem" }}>
                        No tasks yet...
                    </Typography>
                ) : (
                    filteredTasks.map((task) => (
                        <TaskItem
                            key={task._id || task.id}
                            id={task._id || task.id}
                            title={task.title}
                            description={task.description}
                            isCompleted={task.isCompleted}
                            removeTask={handleRemove}
                            onUpdate={handleUpdate}
                            toggleCheck={handleToggle}
                        />
                    ))
                )}
            </Paper>
        </Container>
    );
};

export default TaskList;
