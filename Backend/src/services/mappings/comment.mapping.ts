import { UserCommentDTO } from "../../models/userComment.model.js";

const commentMapping = async (data: any[]): Promise<UserCommentDTO[]> => {
  const userCommentDtos: UserCommentDTO[] = data.map((e) => {
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
