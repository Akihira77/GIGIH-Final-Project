import React, { useEffect, useRef } from "react";
import { CommentListContainer } from "../VideoStyled";
import { CommentsType } from "../../../types/types";

type Props = {
  userComments: CommentsType[];
};

const CommentList = ({ userComments }: Props) => {
  const bottomEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomEl.current?.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <CommentListContainer>
      <h3>Live Chat</h3>
      {userComments.length > 0 &&
        userComments.map(({ username, comment, time }, index) => {
          return (
            <div className="comment" key={index}>
              <h4>{username}</h4>
              <br />
              <p>{comment}</p>
              <p>{time}</p>
            </div>
          );
        })}
      <div ref={bottomEl}></div>
    </CommentListContainer>
  );
};

export default CommentList;
