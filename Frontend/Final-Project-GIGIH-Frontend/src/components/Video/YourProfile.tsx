import React, { useRef, useState } from "react";
import { YourProfileContainer } from "./VideoStyled";
import { Button, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { getCookie } from "../../utils/cookie";
import { submitComment } from "../../utils/fetchApi";

type Props = {
  videoId: string;
};

const YourProfile = ({ videoId }: Props) => {
  const userName = getCookie("user");
  const [commentText, setCommentText] = useState<string | null>(null);

  const handleSubmit = async () => {
    const { axiosResponse } = await submitComment(
      userName,
      commentText!,
      videoId
    );

    console.log(axiosResponse?.data.data);
    setCommentText(null);
  };

  return userName === undefined ? (
    <p>Login First</p>
  ) : (
    <YourProfileContainer>
      <FormControl>
        <FormLabel>{userName}</FormLabel>
        <div className="form">
          <Textarea
            resize="none"
            placeholder="Types your comment..."
            value={commentText ?? ""}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <Button className="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </FormControl>
    </YourProfileContainer>
  );
};

export default YourProfile;
