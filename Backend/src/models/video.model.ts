import mongoose, { model, Document, Schema } from "mongoose";
import ProductModel from "./product.model.js";

interface IVideo extends Document {
  productId: Schema.Types.ObjectId;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

export type VideoDocument = Pick<IVideo, "productId" | "url">;
export type VideoDTO = Pick<IVideo, "productId" | "url">;

const VideoSchema = new Schema<IVideo>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: ProductModel,
    },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const VideoModel = model<IVideo>("Video", VideoSchema);

export default VideoModel;
