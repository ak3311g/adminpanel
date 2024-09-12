import mongoose from "mongoose";
import logFile from "../error/logFile.js";

const connectDB = async () => {
    console.log(process.env.DATABASE_URL);
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.error(`Error`);
        logFile("error.txt", error);
        process.exit(1);
    }
}

export default connectDB;