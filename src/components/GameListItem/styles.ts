import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.section};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 12px;
  width: 90%;
  height: 50px;
  align-items: center;
  padding: 8px;
  align-self: center;
  margin-bottom: 10px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Location = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
`;
