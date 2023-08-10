import { Request, Response } from "express";
import videoService from "../services/repositories/video.service.js";
import {
  thumbnailVideoProductMap,
  videoMap,
} from "../services/mappings/video.mapping.js";
import { VideoDocument } from "../models/video.model.js";
import videoThumbnailService from "../services/repositories/videoThumbnail.service.js";
import { VideoThumbnailDTO } from "../models/videoThumbnail.model.js";

export const getAll = async (req: Request, res: Response) => {
  try {
    const results = await videoService.getAll();

    return res.status(200).send({ data: { videos: await videoMap(results) } });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "Something has happend", error: error });
  }
};

export const create = async (
  req: Request<{}, {}, VideoDocument>,
  res: Response
) => {
  try {
    const result = await videoService.create(req.body);

    await result.save();
    return res.status(201).send({ data: { video: result } });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "Something has happend", error: error });
  }
};

export const getAllThumbnail = async (req: Request, res: Response) => {
  try {
    const thumbnails = await videoThumbnailService.getThumbnailsAndProduct();
    const products = await videoService.getAll("productId");

    const result = await thumbnailVideoProductMap(thumbnails, products);
    return res.status(200).send({ data: result });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "Something has happend", error: error });
  }
};

export const addThumbnail = async (
  req: Request<{ videoId: string }, {}, { urlImage: string }>,
  res: Response
) => {
  try {
    const thumbnail: unknown = await videoThumbnailService.getByVideoId(
      req.params.videoId
    );

    if (thumbnail == null) {
      const savedThumbnail = await videoThumbnailService.create({
        videoId: req.params.videoId,
        urlImage: req.body.urlImage,
      });

      const result: unknown = await savedThumbnail.save();
      return res.status(201).send({ data: { thumbnail: result } });
    }

    const addedThumbnail = await videoThumbnailService.addThumbnail(
      req.params.videoId,
      req.body.urlImage
    );

    return res.status(200).send({ data: { thumbnails: addedThumbnail } });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "Something has happend", error: error });
  }
};

export const getThumbnailFromVideo = async (
  req: Request<{ videoId: string }>,
  res: Response
) => {
  try {
    const thumbnails = await videoThumbnailService.getByVideoId(
      req.params.videoId
    );

    if (thumbnails == null) {
      return res.status(404).send({ message: "Video does not exists" });
    }

    const result: VideoThumbnailDTO = {
      videoId: thumbnails.videoId,
      urlImage: thumbnails.urlImage,
    };

    return res.status(200).send({ data: { thumbnails: result } });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "Something has happend", error: error });
  }
};
