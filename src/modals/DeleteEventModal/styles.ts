import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  padding: 8px 16px;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font};
`;

export const MessageLabel = styled.span`
  color: ${({ theme }) => theme.colors.font};
  margin-top: 16px;
  margin-bottom: 4px;
  text-align: center;
`;

export const ActionsContainer = styled.div`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;
