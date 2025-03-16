const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://ashir:ashir123@cluster0.zlena.mongodb.net/todo-app", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected!");
    } catch (error) {
        console.error(" Database connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
