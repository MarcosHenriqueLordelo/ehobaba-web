import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  padding-top: 40px;
  padding-bottom: 50px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
