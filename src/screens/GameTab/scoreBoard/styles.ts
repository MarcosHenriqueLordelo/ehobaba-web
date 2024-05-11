import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const ChipsContainer = styled.div`
  align-self: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const DateLabel = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
  margin-left: 56px;
  margin-top: -20px;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  flex: 1;
`;
