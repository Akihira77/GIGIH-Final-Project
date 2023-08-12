import { model, Document, Schema } from "mongoose";
import UserModel from "./user.model.js";

interface IProduct extends Document {
  title: string;
  price: number;
  url: string;
  image?: string;
  userId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductDocument = Pick<
  IProduct,
  "title" | "price" | "url" | "userId" | "image"
>;
export type ProductDTO = Pick<IProduct, "title" | "price" | "url" | "image">;
export type VideoProductDTO = Pick<
  IProduct,
  "id" | "title" | "price" | "url" | "userId" | "image"
>;

const ProductSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    url: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: UserModel, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const ProductModel = model<IProduct>("Product", ProductSchema);

export default ProductModel;
