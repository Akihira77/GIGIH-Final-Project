import React from "react";
import { YourProfileContainer } from "./VideoStyled";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { getCookie } from "../../utils/cookie";

type Props = {};

const YourProfile = (props: Props) => {
  const userName = getCookie("user");
  return userName === undefined ? (
    <p>Login First</p>
  ) : (
    <YourProfileContainer>
      <FormControl>
        <FormLabel>{userName}</FormLabel>
        <div className="form">
          <Textarea resize="none" placeholder="Types your comment..." />
          <Button className="submit" onClick={() => console.log("")}>
            Submit
          </Button>
        </div>
      </FormControl>
    </YourProfileContainer>
  );
};

export default YourProfile;
