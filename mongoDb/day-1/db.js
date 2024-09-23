const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect("mongodb://localhost:27017/test");
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting to the database:", error);
  }
};

connectDb();
