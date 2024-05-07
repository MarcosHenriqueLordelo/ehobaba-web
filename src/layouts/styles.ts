import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;
