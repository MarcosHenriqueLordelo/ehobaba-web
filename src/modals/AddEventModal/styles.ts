import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  padding: 8px 16px;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font};
`;

export const PlayerLabel = styled.span`
  margin-top: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.font};
`;

export const ListContainer = styled.div`
  flex-direction: row;
  margin-top: 10px;
  overflow-x: scroll;
  scrollbar-width: none;
`;

export const ActionsContainer = styled.div`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const ErrorLabel = styled.span`
  color: red;
  font-size: 11px;
  margin-top: 2px;
  margin-left: 6px;
`;
