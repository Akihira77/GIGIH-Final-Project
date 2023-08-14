import VideoThumbnailModel from "../../models/videoThumbnail.model.js";
import { BaseService } from "./base.service.js";
class VideoThumbnailService extends BaseService {
    addThumbnail = async (videoId, urlImage) => {
        return await this._model.updateOne({ videoId: videoId }, { $push: { urlImage: urlImage } }, { returnDocument: "after" });
    };
    getByVideoId = async (videoId) => {
        return await this._model.findOne({ videoId: videoId });
    };
    getThumbnailsAndProduct = async () => {
        return await this._model
            .find()
            .populate([{ path: "videoId", select: "url productId" }]);
    };
    getVideoByThumbnailTitle = async (search) => {
        return await this._model
            .find({ videoName: new RegExp(search, "i") })
            .populate([{ path: "videoId", select: "url productId" }]);
    };
}
export default new VideoThumbnailService(VideoThumbnailModel);
