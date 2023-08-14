import { Document, Schema, model } from "mongoose";
import VideoModel from "./video.model.js";

interface IVideoThumbnail extends Document {
  videoName: string;
  videoId: Schema.Types.ObjectId;
  urlImage: string;
  createdAt: Date;
  updatedAt: Date;
}

export type VideoThumbnailDocument = Pick<
  IVideoThumbnail,
  "videoId" | "urlImage" | "videoName"
>;

export type VideoThumbnailDTO = Pick<
  IVideoThumbnail,
  "videoId" | "urlImage" | "videoName"
>;
export type VideoThumbnailProductDTO = {
  videoName: string;
  thumbnailId: any;
  videoId: any;
  urlVideo: any;
  user: string;
  product: Omit<any, never> | undefined;
};

const VideoThumbnailSchema = new Schema<IVideoThumbnail>({
  videoName: { type: String, required: true },
  videoId: { type: Schema.Types.ObjectId, required: true, ref: VideoModel },
  urlImage: { type: String, required: true },
});

const VideoThumbnailModel = model<IVideoThumbnail>(
  "VideoThumbnail",
  VideoThumbnailSchema
);

export default VideoThumbnailModel;
