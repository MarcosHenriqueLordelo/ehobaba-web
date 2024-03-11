import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  height: 90px;
  align-self: center;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  height: 100%;
  flex-direction: row;
  padding: 8px 16px;
`;

export const LeftContainer = styled.div`
  flex: 1;
  justify-content: space-between;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const PositionLabel = styled.p`
  color: ${({ theme }) => theme.colors.action};
  font-size: 40px;
  font-weight: bold;
  text-transform: capitalize;
`;
