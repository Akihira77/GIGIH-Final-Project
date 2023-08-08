import express, { Application } from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app: Application = express();

const connectMongoDB = async (env: string) => {
  const MONGO_URI =
    env == "dev"
      ? (process.env.MONGO_URI_DEV as string)
      : (process.env.MONGO_URI_PROD as string);

  try {
    await mongoose.connect(MONGO_URI);
    console.log("DB Connected");
  } catch (error) {
    console.log("Unable to connect", error);
    process.exit();
  }
};

const startServer = () => {
  const PORT: number = Number(process.env.SERVER_PORT);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} and Mongo ${ENV}`);
  });
};

const ENV = process.argv[2] == "prod" ? "prod" : "dev";

connectMongoDB(ENV).then(() => startServer());
