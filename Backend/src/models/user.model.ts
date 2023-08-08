import mongoose, { model, Document, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserDocument = Pick<IUser, "username" | "password">;
export type UserDTO = Pick<IUser, "username">;

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;
