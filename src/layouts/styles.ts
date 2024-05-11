import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  flex: 1;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  overflow-y: scroll;
  position: relative;

  @media (max-width: 500px) {
    width: 100%;
  }

  @media (min-width: 500px) {
    width: 500px;
  }
`;
