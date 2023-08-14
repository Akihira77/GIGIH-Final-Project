import UserCommentModel from "../../models/userComment.model.js";
import { BaseService } from "./base.service.js";
class UserCommentService extends BaseService {
    submitComment = async (input) => {
        return this._model.create(input);
    };
    getAllByVideoId = async (videoId) => {
        return this._model.find({ videoId: videoId });
    };
}
export default new UserCommentService(UserCommentModel);
