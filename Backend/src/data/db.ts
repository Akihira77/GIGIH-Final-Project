import mongoose from "mongoose";

export const connectMongoDB = async (env: string) => {
  const MONGO_URI =
    env == "prod"
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
