import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import YourProfile from "./YourProfile";
import { CommentSectionContainer } from "./VideoStyled";

type Props = {
  userName: string;
  videoId: string;
  socket: any;
  userComments: any[];
  setUserComments: React.Dispatch<React.SetStateAction<any[]>>;
};

type MessageType = {
  room: string;
  username: string;
  message: string;
  time: string;
};

const CommentSection = ({
  videoId,
  userName,
  socket,
  userComments,
  setUserComments,
}: Props) => {
  const [commentText, setCommentText] = useState<string | null>(null);

  const convertTime = () => {
    const hours = new Date(Date.now()).getHours();
    const minutes = new Date(Date.now()).getMinutes();

    return hours + ":" + (minutes > 10 ? minutes : `0${minutes}`);
  };
  const sendMessage = async () => {
    if (commentText != null && commentText != "") {
      const room = window.sessionStorage.getItem("room")!;
      const messageData: MessageType = {
        room: room,
        username: userName,
        message: commentText,
        time: convertTime(),
      };

      setCommentText(null);
      await socket.emit("send_message", messageData);
      setUserComments((prev: any) => [
        ...prev,
        {
          username: messageData.username,
          comment: messageData.message,
          time: messageData.time,
        },
      ]);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      // console.log(data);
      setUserComments((prev: any) => [
        ...prev,
        {
          username: data.username,
          comment: data.message,
          time: data.time,
        },
      ]);
    });
  }, [socket]);

  return (
    <CommentSectionContainer>
      <CommentList userComments={userComments} />
      <YourProfile
        videoId={videoId}
        userName={userName}
        commentText={commentText}
        setCommentText={setCommentText}
        sendMessage={sendMessage}
      />
    </CommentSectionContainer>
  );
};

export default CommentSection;
