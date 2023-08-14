import styled from "styled-components";

export const Container = styled.div`
  .chakra-card {
    position: relative;
    &__header {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      top: 0;
      z-index: 2;
      padding: 10px;
      font-size: 12px;
      .status {
        background-color: #f94d63;
        border-radius: 3px;
        text-align: center;
        width: 31px;
        height: 20px;
        line-height: 20px;
      }
      .viewer {
        border-radius: 3px;
        display: flex;
        gap: 4px;
        padding: 2px 4px;
        align-items: center;
        background-color: rgba(49, 53, 59, 0.7);
      }
    }
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
      padding: 0.5rem;
      background: linear-gradient(
        rgba(33, 33, 33, 0) 0%,
        rgba(33, 33, 33, 0.8) 100%
      );
      width: 100%;
      p {
        font-size: 1rem;
        &.title {
          font-weight: bold;
        }
        &.seller {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
