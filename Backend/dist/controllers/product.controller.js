import productService from "../services/repositories/product.service.js";
import { productMap, videoProductMap, } from "../services/mappings/product.mapping.js";
import videoService from "../services/repositories/video.service.js";
export const getAll = async (req, res) => {
    try {
        const results = await productService.getAll();
        return res
            .status(200)
            .send({ data: { products: await productMap(results) } });
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ error });
    }
};
export const create = async (req, res) => {
    try {
        const result = await productService.create(req.body);
        await result.save();
        return res.status(201).send({ data: { product: result } });
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ error });
    }
};
export const getAllByVideoId = async (req, res) => {
    try {
        const video = await videoService.getById(req.params.videoId);
        if (video == null) {
            return res.status(404).send({ message: "Video does not exists" });
        }
        const products = await productService.getAllById(video.productId);
        return res
            .status(200)
            .send({ data: { products: await videoProductMap(products) } });
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ error });
    }
};