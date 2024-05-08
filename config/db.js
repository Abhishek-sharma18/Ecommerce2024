import mongoose from "mongoose";
import Colors from "colors";

// connection with mongobd
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to Mongodb ${conn.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`error in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
