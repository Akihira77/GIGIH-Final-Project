import UserModel from "../../models/user.model.js";
import { BaseService } from "./base.service.js";

class UserService extends BaseService {
  getByName = async (name: string) => {
    return await this._model.findOne({ username: name });
  };

  update = async (id: string, password: string) => {
    return await this._model.findByIdAndUpdate(
      id,
      {
        $set: { password: password },
      },
      { returnDocument: "after" }
    );
  };

  login = async (username: string, password: string) => {
    return await this._model.findOne({
      username: username,
      password: password,
    });
  };
}

export default new UserService(UserModel);
