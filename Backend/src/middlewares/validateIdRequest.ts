import { NextFunction, Request, Response } from "express";
import { isValidObjectId } from "mongoose";

const confirmEnding = (str: string, target: string) => {
  return str.endsWith(target);
};

const validatorIdRequest =
  (paramsName: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
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
