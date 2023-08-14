import videoService from "../services/repositories/video.service.js";
import { thumbnailVideoProductMap, videoMap, } from "../services/mappings/video.mapping.js";
import videoThumbnailService from "../services/repositories/videoThumbnail.service.js";
import { isSingleFile } from "../utils/file.js";
import productService from "../services/repositories/product.service.js";
import userService from "../services/repositories/user.service.js";
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
        const urlRequest = req.body.url;
        const videoYtId = ytUrlCopyLink(urlRequest) ?? ytUrlEmbedOrSharedLink(urlRequest);
        const url = `https://www.youtube.com/embed/${videoYtId}`;
        const data = { productId: req.body.productId, url: url };
        const result = await videoService.create(data);
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
        const thumbnails = await videoThumbnailService.getThumbnailsAndProduct();
        const products = await videoService.getAll("productId");
        const users = await userService.getAll();
        const result = await thumbnailVideoProductMap(thumbnails, products, users);
        return res.status(200).send({ data: result });
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
        if (req.body.urlImage !== null) {
            const savedThumbnail = await videoThumbnailService.create({
                videoId: req.params.videoId,
                urlImage: req.body.urlImage,
            });
            const result = await savedThumbnail.save();
            return res.status(201).send({ data: { thumbnail: result } });
        }
        const files = req.files;
        if (files != null) {
            const images = files.image;
            if (isSingleFile(images)) {
                const buffer = images.data;
                const savedThumbnail = await videoThumbnailService.create({
                    videoId: req.params.videoId,
                    urlImage: "data:image/jpeg;base64" + buffer.toString("base64"),
                });
                const result = await savedThumbnail.save();
                return res.status(201).send({ data: { thumbnail: result } });
            }
        }
        return res.status(400).send({ message: "Image was not provided" });
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
            videoName: thumbnails.videoName,
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
export const getVideoById = async (req, res) => {
    try {
        let { url, productId } = await videoService.getById(req.params.videoId);
        const product = await productService.getById(productId);
        url = ytUrlCopyLink(url) ?? ytUrlEmbedOrSharedLink(url);
        url = `https://www.youtube.com/embed/${url}`;
        return res.status(200).send({
            data: { productId: productId, url: url, userId: product.userId },
        });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .send({ message: "Something has happend", error: error });
    }
};
export const searchVideos = async (req, res) => {
    try {
        const products = await videoService.getAll("productId");
        const users = await userService.getAll();
        const thumbnails = await videoThumbnailService.getVideoByThumbnailTitle(req.params.searchText);
        const result = await thumbnailVideoProductMap(thumbnails, products, users);
        return res.status(200).send({ data: result });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .send({ message: "Something has happend", error: error });
    }
};
const ytUrlCopyLink = (urlRequest) => {
    let videoYtId = null;
    const find = "watch?v=";
    if (urlRequest.includes(find)) {
        const start = urlRequest.indexOf(find);
        const end = urlRequest.indexOf("&");
        videoYtId = urlRequest.substring(start + find.length, end === -1 ? urlRequest.length : end);
    }
    return videoYtId;
};
const ytUrlEmbedOrSharedLink = (urlRequest) => {
    const urls = urlRequest.split("/");
    return urls[urls.length - 1];
};
