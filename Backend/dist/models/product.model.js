import { model, Schema } from "mongoose";
const ProductSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    url: { type: String, required: true },
}, {
    timestamps: true,
});
const ProductModel = model("Product", ProductSchema);
export default ProductModel;
