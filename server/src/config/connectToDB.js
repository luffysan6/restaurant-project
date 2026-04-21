import mongoose from "mongoose";
import ENV from "./env.js";
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(ENV.DB_URI);

    console.log("Connect To Database Successfully ✅");
  } catch (error) {
    console.error("Could not Connect to DB \t", error.message);
  }
};

export default connectDB;
