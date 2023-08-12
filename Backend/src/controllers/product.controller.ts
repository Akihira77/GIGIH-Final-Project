import { Request, Response } from "express";
import productService from "../services/repositories/product.service.js";
import {
  productMap,
  videoProductMap,
} from "../services/mappings/product.mapping.js";
import { ProductDocument } from "../models/product.model.js";
import videoService from "../services/repositories/video.service.js";
import userService from "../services/repositories/user.service.js";
import { isSingleFile } from "../utils/file.js";

export const getAll = async (req: Request, res: Response) => {
  try {
    const results = await productService.getAll();

    return res
      .status(200)
      .send({ data: { products: await productMap(results) } });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};

export const create = async (
  req: Request<{}, {}, ProductDocument>,
  res: Response
) => {
  try {
    const { price, title, url, userId, image } = req.body;
    const user = await userService.getById(req.body.userId);
    if (user == null) {
      return res.status(404).send({ message: "User does not exists" });
    }

    if (image != undefined) {
      const result = await productService.create(req.body);
      await result.save();
      return res.status(201).send({ data: { product: result } });
    }

    const files = req.files;
    if (files != null) {
      const images = files.image;
      if (isSingleFile(images)) {
        const buffer = images.data;
        const savedThumbnail = await productService.create({
          title: title,
          url: url,
          price: price,
          userId: userId,
          urlImage: "data:image/jpeg;base64" + buffer.toString("base64"),
        });

        const result: unknown = await savedThumbnail.save();
        return res.status(201).send({ data: { thumbnail: result } });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
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

    const products = await productService.getAllById(video.productId);

    return res
      .status(200)
      .send({ data: { products: await videoProductMap(products) } });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};

export const getAllByUserId = async (
  req: Request<{ userId: string }, {}, {}>,
  res: Response
) => {
  try {
    const products = await productService.getAllByUserId(req.params.userId);

    return res
      .status(200)
      .send({ data: { products: await productMap(products) } });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};
