import { model, Document, Schema } from "mongoose";
import VideoModel from "./video.model.js";

interface IUserComment extends Document {
  username: string;
  videoId: Schema.Types.ObjectId;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserCommentDocument = Pick<
  IUserComment,
  "username" | "videoId" | "comment"
>;

export type UserCommentDTO = Pick<
  IUserComment,
  "username" | "comment" | "createdAt"
>;

const UserCommentSchema = new Schema<IUserComment>(
  {
    username: { type: String, required: true },
    videoId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: VideoModel,
    },
    comment: { type: String },
  },
  {
    timestamps: true,
  }
);

const UserCommentModel = model<IUserComment>("UserComment", UserCommentSchema);

export default UserCommentModel;
