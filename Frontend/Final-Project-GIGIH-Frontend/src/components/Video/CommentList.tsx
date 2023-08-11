import React, { useEffect, useState } from "react";
import { CommentListContainer } from "./VideoStyled";
import { getVideoComments } from "../../utils/fetchApi";

type Props = {
  videoId: string;
};

const CommentList = ({ videoId }: Props) => {
  const [userComments, setUserComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      const { axiosResponse, error } = await getVideoComments(videoId);

      // console.log(axiosResponse?.data.data);
      setUserComments(axiosResponse?.data.data.userComments);
    };

    getComments();
  }, [videoId]);
  return (
    <CommentListContainer>
      {userComments &&
        userComments.map(({ username, comment }) => {
          return (
            <div className="comment">
              <h4>{username}</h4>
              <br />
              <p>{comment}</p>
            </div>
          );
        })}
    </CommentListContainer>
  );
};

export default CommentList;
