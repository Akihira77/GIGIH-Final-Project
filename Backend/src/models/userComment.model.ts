import mongoose, { model, Document, Schema } from "mongoose";
import ProductModel from "./product.model.js";

interface IUserComment extends Document {
  username: string;
  productId: Schema.Types.ObjectId;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserCommentDocument = Pick<
  IUserComment,
  "username" | "productId" | "comment"
>;

export type UserCommentDTO = Pick<
  IUserComment,
  "username" | "comment" | "createdAt" | "updatedAt"
>;

const UserCommentSchema = new Schema<IUserComment>(
  {
    username: { type: String, required: true },
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: ProductModel,
    },
    comment: { type: String },
  },
  {
    timestamps: true,
  }
);

const UserCommentModel = model<IUserComment>("UserComment", UserCommentSchema);

export default UserCommentModel;
