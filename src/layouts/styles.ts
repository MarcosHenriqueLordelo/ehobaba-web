import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  flex: 1;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
`;
