import { isValidObjectId } from "mongoose";
const confirmEnding = (str, target) => {
    return str.endsWith(target);
};
const validatorIdRequest = (paramsName) => async (req, res, next) => {
    if (!confirmEnding(paramsName, "id") && !confirmEnding(paramsName, "Id")) {
        return next();
    }
    const { ...id } = req.params;
    if (!isValidObjectId(id[paramsName])) {
        return res.status(400).send({ message: "Id you are input is not valid" });
    }
    return next();
};
export default validatorIdRequest;
