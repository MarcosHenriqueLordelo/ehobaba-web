import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 64px;
  padding: 0px 16px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
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
`;

export const RightContainer = styled.div`
  flex-direction: row-reverse;
`;
