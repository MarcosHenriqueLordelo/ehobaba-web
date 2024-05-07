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

export const CodeLabel = styled.span`
  color: ${({ theme }) => theme.colors.action};
  margin-top: 16px;
  margin-bottom: 4px;
  font-size: 12px;
  cursor: text;
`;

export const Code = styled.span`
  color: ${({ theme }) => theme.colors.font};
  padding: 8px 16px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  margin-top: 8px;
  align-self: center;
  letter-spacing: 3px;
  width: 120px;
  text-align: center;
`;

export const ActionsContainer = styled.div`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;
