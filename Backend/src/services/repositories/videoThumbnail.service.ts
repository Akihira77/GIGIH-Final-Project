import VideoThumbnailModel from "../../models/videoThumbnail.model.js";
import { BaseService } from "./base.service.js";

class VideoThumbnailService extends BaseService {
  addThumbnail = async (videoId: string, urlImage: string) => {
    return await this._model.updateOne(
      { videoId: videoId },
      { $push: { urlImage: urlImage } },
      { returnDocument: "after" }
    );
  };

  getByVideoId = async (videoId: string) => {
    return await this._model.findOne({ videoId: videoId });
  };
}

export default new VideoThumbnailService(VideoThumbnailModel);
