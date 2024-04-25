import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  height: 60px;
  justify-content: space-between;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-bottom: 10px;
`;

export const LeftContainer = styled.div``;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
`;

export const DeleteContainer = styled.button``;
