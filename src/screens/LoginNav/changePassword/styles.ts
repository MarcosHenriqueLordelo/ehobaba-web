import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  flex: 1;
  align-items: center;
  padding-top: 70px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
`;

interface ConditionProps {
  filled?: boolean;
}
export const ConditionsView = styled.div`
  width: 80%;
`;

export const ConditionLabel = styled.span<ConditionProps>`
  color: ${({ theme, filled }) =>
    filled ? theme.colors.action : theme.colors.font};
  font-size: 14px;
  margin-top: 6px;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.font};
  font-size: 16px;
  width: 80%;
  padding-left: 6px;
  margin-bottom: 16px;
`;
