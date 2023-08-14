import { model, Schema } from "mongoose";
import VideoModel from "./video.model.js";
const UserCommentSchema = new Schema({
    username: { type: String, required: true },
    videoId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: VideoModel,
    },
    comment: { type: String },
}, {
    timestamps: true,
});
const UserCommentModel = model("UserComment", UserCommentSchema);
export default UserCommentModel;
