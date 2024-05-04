import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  height: 70px;
  padding: 8px 16px;
  align-self: center;
  margin-bottom: 10px;
  flex-direction: row;
  display: flex;
`;

export const LeftContainer = styled.div`
  flex: 1;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 20px;
  font-weight: bold;
  max-height: calc(1.2em * 1);
  text-transform: capitalize;
`;

export const PositionLabel = styled.p`
  color: ${({ theme }) => theme.colors.action};
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const RowContainer = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

export const ValueLabel = styled.p`
  color: ${({ theme }) => theme.colors.action};
  font-size: 16px;
  text-transform: capitalize;
  margin-left: 8px;
`;

export const ValueIndicatorContainer = styled.div`
  flex: 1;
  height: 8px;
  display: flex;
  flex-direction: column;
`;

interface ValueIndicatorProps {
  width?: number;
}

export const ValueIndicator = styled.div<ValueIndicatorProps>`
  height: 8px;
  background-color: ${({ theme }) => theme.colors.action};
  width: ${({ width }) => `${width ? width : 0}%`};
`;
