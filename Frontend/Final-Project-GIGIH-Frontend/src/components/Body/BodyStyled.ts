import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    cursor: pointer;
    width: 15%;
    height: 500px;
  }
`;
