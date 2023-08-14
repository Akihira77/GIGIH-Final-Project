import { model, Schema } from "mongoose";
import UserModel from "./user.model.js";
const ProductSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    url: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: UserModel, required: true },
    image: { type: String },
}, {
    timestamps: true,
});
const ProductModel = model("Product", ProductSchema);
export default ProductModel;
