import { Schema, model } from "mongoose";
import VideoModel from "./video.model.js";
const VideoThumbnailSchema = new Schema({
    videoId: { type: Schema.Types.ObjectId, required: true, ref: VideoModel },
    urlImage: [{ type: String, required: true }],
});
const VideoThumbnailModel = model("VideoThumbnail", VideoThumbnailSchema);
export default VideoThumbnailModel;
