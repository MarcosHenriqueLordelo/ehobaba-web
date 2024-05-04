import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  width: 90%;
  align-self: center;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: -4px;
  margin-left: 8px;
`;

export const Title = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.font};
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
`;
