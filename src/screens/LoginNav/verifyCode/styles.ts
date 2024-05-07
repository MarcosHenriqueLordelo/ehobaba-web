import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ScrollView = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  flex: 1;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 16px;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.font};
  font-size: 16px;
  width: 80%;
  padding-left: 6px;
`;
