import styled from "styled-components";

export const Container = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  position: fixed;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Label = styled.span`
  max-lines: 1;
  line-height: 28px;
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
`;

export const LeftContainer = styled.div`
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;

export const RightContainer = styled.div`
  flex-direction: row-reverse;
  padding-right: 16px;
`;
