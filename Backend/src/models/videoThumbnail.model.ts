import { Document, Schema, model } from "mongoose";
import VideoModel from "./video.model.js";

interface IVideoThumbnail extends Document {
  videoId: Schema.Types.ObjectId;
  urlImage: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type VideoThumbnailDocument = Pick<
  IVideoThumbnail,
  "videoId" | "urlImage"
>;

export type VideoThumbnailDTO = Pick<IVideoThumbnail, "videoId" | "urlImage">;
export type VideoThumbnailProductDTO = {
  thumbnailId: any;
  videoId: any;
  urlVideo: any;
  product: Omit<any, never> | undefined;
};

const VideoThumbnailSchema = new Schema<IVideoThumbnail>({
  videoId: { type: Schema.Types.ObjectId, required: true, ref: VideoModel },
  urlImage: [{ type: String, required: true }],
});

const VideoThumbnailModel = model<IVideoThumbnail>(
  "VideoThumbnail",
  VideoThumbnailSchema
);

export default VideoThumbnailModel;
