import { UploadedFile } from "express-fileupload";

export const isSingleFile = (
  file: UploadedFile | UploadedFile[]
): file is UploadedFile => {
  return typeof file === "object" && (file as UploadedFile).name !== undefined;
};
