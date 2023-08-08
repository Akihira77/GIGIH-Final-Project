export class BaseService {
    _model;
    constructor(_model) {
        this._model = _model;
    }
    getAll = async (populate) => {
        return await this._model.find().populate(populate || []);
    };
    getById = async (id, populate) => {
        return await this._model.findById(id).populate(populate || []);
    };
    create = async (input) => {
        return await this._model.create(input);
    };
    delete = async (id) => {
        return await this._model.findByIdAndDelete(id);
    };
}
