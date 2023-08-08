import videoService from "../services/repositories/video.service.js";
import { thumbnailMap, videoMap } from "../services/mappings/video.mapping.js";
import videoThumbnailService from "../services/repositories/videoThumbnail.service.js";
export const getAll = async (req, res) => {
    try {
        const results = await videoService.getAll();
        return res.status(200).send({ data: { videos: await videoMap(results) } });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .send({ message: "Something has happend", error: error });
    }
};
export const create = async (req, res) => {
    try {
        const result = await videoService.create(req.body);
        await result.save();
        return res.status(201).send({ data: { video: result } });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .send({ message: "Something has happend", error: error });
    }
};
export const getAllThumbnail = async (req, res) => {
    try {
        const thumbnails = await videoThumbnailService.getAll();
        return res
            .status(200)
            .send({ data: { thumbnails: await thumbnailMap(thumbnails) } });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .send({ message: "Something has happend", error: error });
    }
};
export const addThumbnail = async (req, res) => {
    try {
        const thumbnail = await videoThumbnailService.getByVideoId(req.params.videoId);
        if (thumbnail == null) {
            const savedThumbnail = await videoThumbnailService.create({
                videoId: req.params.videoId,
                urlImage: req.body.urlImage,
            });
            const result = await savedThumbnail.save();
            return res.status(201).send({ data: { thumbnail: result } });
        }
        const addedThumbnail = await videoThumbnailService.addThumbnail(req.params.videoId, req.body.urlImage);
        return res.status(200).send({ data: { thumbnails: addedThumbnail } });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .send({ message: "Something has happend", error: error });
    }
};
export const getThumbnailFromVideo = async (req, res) => {
    try {
        const thumbnails = await videoThumbnailService.getByVideoId(req.params.videoId);
        if (thumbnails == null) {
            return res.status(404).send({ message: "Video does not exists" });
        }
        const result = {
            videoId: thumbnails.videoId,
            urlImage: thumbnails.urlImage,
        };
        return res.status(200).send({ data: { thumbnails: result } });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .send({ message: "Something has happend", error: error });
    }
};
