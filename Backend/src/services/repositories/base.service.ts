import { Model, Schema } from "mongoose";

export class BaseService {
  constructor(protected readonly _model: typeof Model) {}

  getAll = async (populate?: string) => {
    return await this._model.find().populate(populate || []);
  };

  getById = async (id: string | Schema.Types.ObjectId, populate?: string) => {
    return await this._model.findById(id).populate(populate || []);
  };

  create = async (input: unknown) => {
    return await this._model.create(input);
  };

  delete = async (id: string) => {
    return await this._model.findByIdAndDelete(id);
  };
}
