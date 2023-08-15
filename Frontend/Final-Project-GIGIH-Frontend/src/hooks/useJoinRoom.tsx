import { useEffect, useState } from "react";
import { getVideoComments } from "../utils/fetchApi";
import { CommentsType } from "../types/types";

const convertTime = (createdAt: Date) => {
  const hours = new Date(createdAt).getHours();
  const minutes = new Date(createdAt).getMinutes();

  return hours + ":" + (minutes > 10 ? minutes : `0${minutes}`);
};

export const useJoinRoom = ({ room, socket }): CommentsType[] => {
  const [comments, setComments] = useState<CommentsType[]>();
  useEffect(() => {
    if (room !== "") {
      socket.emit("join_room", room);
      const getComments = async () => {
        const { axiosResponse } = await getVideoComments(room);

        const result: CommentsType[] =
          axiosResponse?.data.data.userComments.map(
            ({ username, comment, createdAt }) => {
              return {
                username: username,
                comment: comment,
                time: convertTime(createdAt),
              };
            }
          );

        setComments(result);
      };

      getComments();
    }
  }, [room]);

  return comments;
};
