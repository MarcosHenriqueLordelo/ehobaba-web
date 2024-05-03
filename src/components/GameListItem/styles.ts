import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  width: 90%;
  height: 50px;
  margin-bottom: 10px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
`;

export const Location = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 8px;
  margin-top: -4px;
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  margin-right: 8px;
  margin-top: -4px;
`;
