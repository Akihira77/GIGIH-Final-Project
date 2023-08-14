import mongoose from "mongoose";
export const connectMongoDB = async (env) => {
    const MONGO_URI = env == "prod"
        ? process.env.MONGO_URI_DEV
        : process.env.MONGO_URI_PROD;
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB Connected");
    }
    catch (error) {
        console.log("Unable to connect", error);
        process.exit();
    }
};
