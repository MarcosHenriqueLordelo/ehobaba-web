import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  justify-content: space-between;
  padding: 14px 10px;
  margin-right: 10px;
  width: fit-content;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const TitleContainer = styled.div`
  margin-left: 6px;
  margin-top: -4px;
`;

export const Title = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.font};
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
  margin-top: -4px;
`;

export const BottomContainer = styled.div`
  flex-direction: row;
  padding-left: 3px;
`;
