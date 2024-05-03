import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 100%;
`;

export const Label = styled.span`
  max-lines: 1;
  line-height: 28px;
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: 16px;
`;
