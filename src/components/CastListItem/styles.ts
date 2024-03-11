import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  align-self: center;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 17px;
  font-weight: bold;
  text-transform: capitalize;
  margin-left: 16px;
  flex: 1;
`;

export const Content = styled.div`
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: 8px 16px;
`;
