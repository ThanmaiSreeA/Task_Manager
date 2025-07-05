
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const connectDB = async () => {
  try {
    console.log(" MONGO_URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("CONNECTED TO DB");
  } catch (err) {
    console.log(" DB CONNECTION ERROR:", err.message);
  }
};


export default connectDB;

