import { model, Schema } from "mongoose";
import ProductModel from "./product.model.js";
const UserCommentSchema = new Schema({
    username: { type: String, required: true },
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: ProductModel,
    },
    comment: { type: String },
}, {
    timestamps: true,
});
const UserCommentModel = model("UserComment", UserCommentSchema);
export default UserCommentModel;
