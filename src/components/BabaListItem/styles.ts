import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.section};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 12px;
  width: 90%;
  margin-bottom: 10px;
  min-height: 80px;
  max-height: 80px;
`;

export const LeftContainer = styled.div`
  justify-content: space-between;
  padding: 8px 0px 8px 16px;
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
  flex-direction: row;
  padding: 8px 16px 8px 0px;
  align-items: flex-start;
`;

export const CastLength = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 8px;
`;
