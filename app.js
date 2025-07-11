import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import express from "express";
import Tasks from "./routes/Tasks.js";
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const app=express();
const port=process.env.PORT || 3000;


app.use(express.static('./public'))
app.use(express.json())


app.use("/api/v1/Tasks", Tasks);

app.use(notFound)
app.use(errorHandlerMiddleware)


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