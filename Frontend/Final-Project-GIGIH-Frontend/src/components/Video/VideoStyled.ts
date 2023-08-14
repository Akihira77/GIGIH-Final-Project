import styled from "styled-components";

export const ProductListContainer = styled.div`
  max-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  padding: 2rem 0;
  &::-webkit-scrollbar {
    width: 0.7rem;
    &-thumb {
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
  .chakra-card {
    width: 60%;
    margin: 0 auto;
    height: 250px;
    cursor: pointer;
  }
`;

export const MainVideoContainer = styled.div`
  width: 90%;
  height: 500px;
  background-color: red;

  .youtube__video {
    width: 100%;
    height: 500px;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
`;

export const VideoContainer = styled.div`
  .mid {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const YourProfileContainer = styled.div`
  padding: 0.5rem 1rem;
  height: 200px;
  .form {
    display: flex;
    flex-direction: column;
    .submit {
      margin-top: 1rem;
    }
  }
`;

export const CommentListContainer = styled.div`
  height: 500px;
  border-bottom: 1px solid #b3b3b3;
  padding: 1rem 0.5rem;
  max-height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  h3 {
    text-align: center;
  }
  gap: 1rem;
  &::-webkit-scrollbar {
    width: 0.7rem;
    &-thumb {
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
  .comment {
    float: left;
    border-radius: 5px;
    padding: 5px 10px;
    color: white;
    &:nth-child(2n - 1) {
      border: 1px solid rgba(16, 46, 46, 1);
      background-color: rgba(16, 46, 46, 0.973);
    }
    &:nth-child(2n) {
      border: 1px solid #ecb21f;
      background-color: black;
    }
  }
  .comment h4,
  .comment span,
  .darker h4,
  .darker span {
    display: inline;
  }

  .comment p,
  .comment span,
  .darker p,
  .darker span {
    color: rgb(184, 183, 183);
  }
`;

export const CommentSectionContainer = styled.div`
  border-left: 1px solid #b3b3b3;
  height: 100vh;
`;
