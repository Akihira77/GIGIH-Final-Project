import express from "express";
// Controller
import * as userController from "../controllers/user.controller.js";
import validateIdRequest from "../middlewares/validateIdRequest.js";
const userRoutes = express();
userRoutes.get("/", userController.getAll);
userRoutes.get("/:id", validateIdRequest("id"), userController.getById);
userRoutes.post("/", userController.create);
userRoutes.delete("/:id", validateIdRequest("id"), userController.remove);
userRoutes.put("/:id", validateIdRequest("id"), userController.update);
userRoutes.get("/comments/get-all", userController.getAllUserComments);
userRoutes.get("/comments/get-comment-from-video/:videoId", validateIdRequest("videoId"), userController.getAllByVideoId);
userRoutes.post("/comments/submit-comment/:videoId", validateIdRequest("videoId"), userController.submitComment);
export default userRoutes;
