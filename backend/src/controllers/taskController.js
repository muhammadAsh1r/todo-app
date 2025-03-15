const { json } = require("express");
const Task = require("../models/Task")

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(500).json({ error: "Task not found" })
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

exports.createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log("Received data:", title, description);

        const task = new Task({ title, description });
        await task.save();

        res.status(201).json(task); // Send the saved task as a response
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// exports.updateTask = async (req, res) => {
//     try {
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         res.json(product);
//     } catch (error) {
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }

exports.updateTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Validate request body
        if (!title || !description) {
            return res.status(400).json({ error: "Title and description are required" });
        }

        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!task) return res.status(404).json({ error: "Task not found" });

        res.json(task); // Return updated task
    } catch (error) {
        console.error("Update error:", error); // Log the actual error
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};