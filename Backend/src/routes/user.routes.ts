import express, { Router } from "express";

// Controller
import * as userController from "../controllers/user.controller.js";
import validateIdRequest from "../middlewares/validateIdRequest.js";

const userRoutes: Router = express();

userRoutes.get("/", userController.getAll);
userRoutes.get("/comments/get-all", userController.getAllUserComments);

userRoutes.post("/", userController.create);
userRoutes.post("/login", userController.login);

userRoutes.get("/:id", validateIdRequest("id"), userController.getById);
userRoutes.delete("/:id", validateIdRequest("id"), userController.remove);
userRoutes.put("/:id", validateIdRequest("id"), userController.update);

userRoutes.get(
  "/comments/get-comment-from-video/:videoId",
  validateIdRequest("videoId"),
  userController.getAllByVideoId
);
userRoutes.post(
  "/comments/submit-comment/:videoId",
  validateIdRequest("videoId"),
  userController.submitComment
);

export default userRoutes;
