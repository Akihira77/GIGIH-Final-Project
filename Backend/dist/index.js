import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
const app = express();
const connectMongoDB = async (env) => {
    const MONGO_URI = env === "dev" ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_PROD;
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB Connected");
    }
    catch (error) {
        console.log("Unable to connect", error);
        process.exit();
    }
};
const startServer = () => {
    const PORT = Number(process.env.SERVER_PORT);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} and Mongo ${ENV}`);
    });
};
const ENV = process.argv[2] || "dev";
connectMongoDB(ENV).then(() => startServer());
