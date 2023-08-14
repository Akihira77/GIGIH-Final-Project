import express from "express";
import * as productController from "../controllers/product.controller.js";
import validateIdRequest from "../middlewares/validateIdRequest.js";
const productRoutes = express();
productRoutes.get("/", productController.getAll);
productRoutes.get("/get-product-list-by-videoId/:videoId", validateIdRequest("videoId"), productController.getAllByVideoId);
productRoutes.get("/get-products-by-user/:userId", validateIdRequest("userId"), productController.getAllByUserId);
productRoutes.post("/", productController.create);
export default productRoutes;
