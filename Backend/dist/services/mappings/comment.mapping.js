const commentMapping = async (data) => {
    const userCommentDtos = data.map((e) => {
        return {
            username: e.username,
            comment: e.comment,
            createdAt: e.createdAt,
            updatedAt: e.updatedAt,
        };
    });
    return userCommentDtos;
};
export default commentMapping;
