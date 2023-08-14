export const isSingleFile = (file) => {
    return typeof file === "object" && file.name !== undefined;
};
