import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import express from "express";
import Tasks from "./routes/Tasks.js";

const app=express();
const port=3000;



app.use(express.json())

app.get("/hello", (req,res)=>{
    res.send("Task Manager App")
})

app.use("/api/v1/Tasks", Tasks);

const start = async () => {
  try {
    await connectDB(); 
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log("Server failed to start:", error.message);
  }
};

start();