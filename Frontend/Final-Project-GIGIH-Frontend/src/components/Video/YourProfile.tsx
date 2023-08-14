import React from "react";
import { YourProfileContainer } from "./VideoStyled";
import { Button, FormControl, FormLabel, Textarea } from "@chakra-ui/react";

type Props = {
  userName: string;
  videoId: string;
  commentText: string | null;
  setCommentText: React.Dispatch<React.SetStateAction<string | null>>;
  sendMessage: () => Promise<void>;
};

const YourProfile = ({
  userName,
  commentText,
  setCommentText,
  sendMessage,
}: Props) => {
  const checkKey = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      sendMessage();
    }
  };
  return (
    <YourProfileContainer>
      {userName === undefined ? (
        <p>Login First</p>
      ) : (
        <FormControl onSubmit={sendMessage}>
          <FormLabel>{userName}</FormLabel>
          <div className="form">
            <Textarea
              resize="none"
              placeholder="Types your comment..."
              value={commentText ?? ""}
              onKeyDown={(e) => {
                checkKey(e);
              }}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <Button type="submit" className="submit" onClick={sendMessage}>
              Send
            </Button>
          </div>
        </FormControl>
      )}
    </YourProfileContainer>
  );
};

export default YourProfile;
