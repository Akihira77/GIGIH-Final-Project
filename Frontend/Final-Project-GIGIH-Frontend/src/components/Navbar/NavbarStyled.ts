import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  /* width: 100vw; */
  top: 0;
  z-index: 2;
  background-color: rgb(40, 40, 47);
  display: flex;
  justify-content: space-between;
  .chakra-link {
    &:hover {
      text-decoration: none;
    }
  }
  .box__link {
    &:hover {
      cursor: pointer;
    }
    &:active,
    &.now {
      color: rgb(4, 228, 19);
      background-color: rgba(46, 135, 40, 0.18);
      border: 1px solid #00aa5b;
    }
  }
  .left__navbar {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    padding-right: 2rem;

    .profile {
      padding-left: 1rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
