import express, { Router } from "express";

// Controller
import * as productController from "../controllers/product.controller.js";
import validateIdRequest from "../middlewares/validateIdRequest.js";

const productRoutes: Router = express();

productRoutes.get("/", productController.getAll);
productRoutes.get(
  "/get-product-list-by-videoId/:videoId",
  validateIdRequest("videoId"),
  productController.getAllByVideoId
);
productRoutes.post("/", productController.create);

export default productRoutes;
