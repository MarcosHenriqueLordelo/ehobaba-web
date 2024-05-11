import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ListContainer = styled.div`
  padding-top: 70px;
  padding-bottom: 50px;
  flex: 1;
`;
