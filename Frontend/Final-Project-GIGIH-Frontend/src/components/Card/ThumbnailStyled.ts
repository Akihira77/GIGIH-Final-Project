import styled from "styled-components";

export const Container = styled.div`
  .chakra-card {
    &__body {
      position: relative;
      padding: 0;
      img {
        height: 500px;
        width: 100%;
      }
    }
    &__footer {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      background: linear-gradient(
        rgba(33, 33, 33, 0) 0%,
        rgba(33, 33, 33, 0.8) 100%
      );
      width: 100%;
    }
  }
`;
