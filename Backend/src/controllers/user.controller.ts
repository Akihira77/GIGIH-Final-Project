import { Request, Response } from "express";
import userService from "../services/repositories/user.service.js";
import userMap from "../services/mappings/user.mapping.js";
import { UserDocument } from "../models/user.model.js";
import videoService from "../services/repositories/video.service.js";
import userCommentService from "../services/repositories/userComment.service.js";
import commentMapping from "../services/mappings/comment.mapping.js";

export const getAll = async (req: Request, res: Response) => {
  try {
    const results = await userService.getAll();

    return res.status(200).send({ data: { users: await userMap(results) } });
  } catch (error: unknown) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "something has happend", error: error });
  }
};

export const getById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const result = await userService.getById(req.params.id);
    if (result == null) {
      return res.status(404).send({ message: "User does not exists" });
    }

    return res.status(200).send({ data: { user: result.username } });
  } catch (error: unknown) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "something has happend", error: error });
  }
};

export const create = async (
  req: Request<{}, {}, UserDocument>,
  res: Response
) => {
  try {
    const userExists = await userService.getByName(req.body.username);
    if (userExists != null) {
      return res.status(400).send({ message: "User is already exists" });
    }

    const user = await userService.create(req.body);
    await user.save();

    return res.status(201).send({ data: { user: user } });
  } catch (error: unknown) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "something has happend", error: error });
  }
};

export const remove = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const user = await userService.delete(req.params.id);
    if (user == null) {
      return res.status(404).send({ message: "User does not exists" });
    }
    return res.status(200).send({ user });
  } catch (error: unknown) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "something has happend", error: error });
  }
};

export const update = async (
  req: Request<{ id: string }, {}, Pick<UserDocument, "password">>,
  res: Response
) => {
  try {
    const user = await userService.update(req.params.id, req.body.password);
    if (user == null) {
      return res.status(404).send({ message: "User does not exists" });
    }

    return res.status(200).send({
      data: { user: { username: user.username, password: user.password } },
    });
  } catch (error: unknown) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "something has happend", error: error });
  }
};

export const submitComment = async (
  req: Request<{ videoId: string }, {}, { username: string; comment: string }>,
  res: Response
) => {
  try {
    const video = await videoService.getById(req.params.videoId);
    if (video == null) {
      return res.status(404).send({ message: "Video does not exists" });
    }

    if ((await userService.getByName(req.body.username)) == null) {
      return res.status(404).send({ message: "User does not exists" });
    }

    const result = await userCommentService.submitComment({
      productId: video.productId,
      username: req.body.username,
      comment: req.body.comment,
    });

    await result.save();

    return res.status(200).send({ data: { userComments: result } });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "something has happend", error: error });
  }
};

export const getAllByVideoId = async (
  req: Request<{ videoId: string }>,
  res: Response
) => {
  try {
    const video = await videoService.getById(req.params.videoId);
    if (video == null) {
      return res.status(404).send({ message: "Video does not exists" });
    }

    const comments = await userCommentService.getAllByProductId(
      video.productId
    );

    return res
      .status(200)
      .send({ data: { userComments: await commentMapping(comments) } });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "something has happend", error: error });
  }
};

export const getAllUserComments = async (req: Request, res: Response) => {
  try {
    const results = await userCommentService.getAll();

    return res
      .status(200)
      .send({ data: { userComments: await commentMapping(results) } });
  } catch (error: unknown) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "something has happend", error: error });
  }
};

export const login = async (
  req: Request<{}, {}, { username: string; password: string }>,
  res: Response
) => {
  try {
    const { username, password } = req.body;
    const result = await userService.login(username, password);
    if (result == null) {
      return res.status(404).send({ message: "User does not exists" });
    }

    return res.status(200).send({ message: `welcome ${username}` });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "something has happend", error: error });
  }
};
