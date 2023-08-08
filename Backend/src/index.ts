import express, { Application } from "express";
import "dotenv/config";
import userRoutes from "./routes/user.routes.js";
import videoRoutes from "./routes/video.routes.js";
import productRoutes from "./routes/product.routes.js";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import { connectMongoDB } from "./data/db.js";

const ENV = process.argv[2] == "prod" ? "prod" : "dev";

const startServer = () => {
  const app: Application = express();

  //TODO Middleware
  //! PRODUCTION
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use(compression());

  //! DEVELOPMENT
  if (ENV == "dev") {
    app.use(morgan("dev"));
  }

  //TODO Routes
  app.use("/api/users", userRoutes);
  app.use("/api/videos", videoRoutes);
  app.use("/api/products", productRoutes);

  const PORT: number = Number(process.env.SERVER_PORT);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${ENV} environment`);
  });
};

connectMongoDB(ENV).then(() => startServer());
