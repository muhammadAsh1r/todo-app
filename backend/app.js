const express = require("express");
const cors = require("cors");
const taskRoutes = require("./src/routes/taskRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

module.exports = app;