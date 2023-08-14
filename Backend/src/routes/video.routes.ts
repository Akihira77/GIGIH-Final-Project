import express, { Router } from "express";
import * as videoController from "../controllers/video.controller.js";
import validatorIdRequest from "../middlewares/validateIdRequest.js";
("../middleware/validatorIdRequest.middleware");

const videoRoutes: Router = express();

videoRoutes.get("/", videoController.getAll);
videoRoutes.get("/thumbnails", videoController.getAllThumbnail);
videoRoutes.get("/search/:searchText", videoController.searchVideos);
videoRoutes.post("/", videoController.create);

videoRoutes.get(
  "/thumbnails/:videoId",
  validatorIdRequest("videoId"),
  videoController.getThumbnailFromVideo
);
videoRoutes.get(
  "/:videoId",
  validatorIdRequest("videoId"),
  videoController.getVideoById
);

videoRoutes.post(
  "/thumbnails/:videoId",
  validatorIdRequest("videoId"),
  videoController.addThumbnail
);

export default videoRoutes;
