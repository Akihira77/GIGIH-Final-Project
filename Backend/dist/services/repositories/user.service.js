import UserModel from "../../models/user.model.js";
import { BaseService } from "./base.service.js";
class UserService extends BaseService {
    getByName = async (name) => {
        return await this._model.findOne({ username: name });
    };
    update = async (id, password) => {
        return await this._model.findByIdAndUpdate(id, {
            $set: { password: password },
        }, { returnDocument: "after" });
    };
}
export default new UserService(UserModel);
