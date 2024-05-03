import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  background-color: ${({ theme }) => theme.colors.section};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 12px;
  width: 80%;
  height: 80px;
  padding: 8px 16px;
  margin-bottom: 10px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 16px;
  text-transform: uppercase;
`;

export const LastMatch = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 12px;
  font-weight: 400;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CastLength = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 8px;
`;
