import mongoose, { model, Document, Schema } from "mongoose";

interface IProduct extends Document {
  title: string;
  price: number;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductDocument = Pick<IProduct, "title" | "price" | "url">;
export type ProductDTO = Pick<IProduct, "title" | "price" | "url">;
export type VideoProductDTO = Pick<IProduct, "id" | "title" | "price" | "url">;

const ProductSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = model<IProduct>("Product", ProductSchema);

export default ProductModel;
