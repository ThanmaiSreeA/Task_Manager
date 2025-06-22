import express from "express";
import Tasks from "./routes/Tasks.js"

const app=express();
const port=3000;



app.use(express.json())

app.get("/hello", (req,res)=>{
    res.send("Task Manager App")
})

app.use("/api/v1/Tasks", Tasks);

app.listen(port,console.log(`server is listening on port ${port}...`))