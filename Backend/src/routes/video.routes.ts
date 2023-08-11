import express, { Router } from "express";
import * as videoController from "../controllers/video.controller.js";
import validatorIdRequest from "../middlewares/validateIdRequest.js";
("../middleware/validatorIdRequest.middleware");

const videoRoutes: Router = express();

videoRoutes.get("/", videoController.getAll);
videoRoutes.get("/thumbnails", videoController.getAllThumbnail);
videoRoutes.get(
  "/thumbnails/:videoId",
  validatorIdRequest("videoId"),
  videoController.getThumbnailFromVideo
);
videoRoutes.get("/:videoId", videoController.getVideoById);

videoRoutes.post("/", videoController.create);
videoRoutes.post(
  "/thumbnails/:videoId",
  validatorIdRequest("videoId"),
  videoController.addThumbnail
);

export default videoRoutes;
