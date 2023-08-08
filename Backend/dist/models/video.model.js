import { model, Schema } from "mongoose";
import ProductModel from "./product.model.js";
const VideoSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: ProductModel,
    },
    url: { type: String, required: true },
}, {
    timestamps: true,
});
const VideoModel = model("Video", VideoSchema);
export default VideoModel;
