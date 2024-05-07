import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-items: center;
`;

export const ActionsContainer = styled.div`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.action};
  padding: 6px 16px;
`;

export const LoaderContainer = styled.div`
  height: 500px;
  justify-content: center;
  align-items: center;
`;

export const RowContainer = styled.div`
  flex-direction: row;
`;
