const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("Your connection string here", {
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
