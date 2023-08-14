import express from "express";
import "dotenv/config";
import userRoutes from "./routes/user.routes.js";
import videoRoutes from "./routes/video.routes.js";
import productRoutes from "./routes/product.routes.js";
import cors from "cors";
import compression from "compression";
import { connectMongoDB } from "./data/db.js";
import expressFileUpload from "express-fileupload";
import { SeedDataComment, SeedDataProduct, SeedDataThumbnail, SeedDataUser, SeedDataVideo, } from "./seed.js";
import { startSocket } from "./utils/socket.js";
const ENV = "prod";
const startServer = () => {
    const app = express();
    const PORT = Number(process.env.SERVER_PORT);
    const corsOptions = {
        origin: "*",
    };
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors(corsOptions));
    app.use(compression());
    app.use(expressFileUpload({
        limits: { fileSize: 2 * 1024 * 1024 },
    }));
    app.post("/api/seed-data", async (req, res) => {
        await SeedDataUser();
        await SeedDataProduct();
        await SeedDataVideo();
        await SeedDataThumbnail();
        await SeedDataComment();
        return res.status(201).send({ message: "Seeding data success" });
    });
    app.use("/api/users", userRoutes);
    app.use("/api/videos", videoRoutes);
    app.use("/api/products", productRoutes);
    const server = app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} in ${ENV} environment`);
    });
    startSocket(server, corsOptions);
};
connectMongoDB(ENV).then(() => startServer());
