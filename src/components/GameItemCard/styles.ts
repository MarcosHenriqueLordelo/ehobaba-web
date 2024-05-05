import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  justify-content: space-between;
  margin-right: 10px;
  width: fit-content;
`;

export const HeaderContainer = styled.div`
  flex-direction: row;
  align-items: flex-start;
  padding: 14px 10px;
`;

export const TitleContainer = styled.div`
  width: 100px;
  margin-left: 6px;
  margin-top: -4px;
`;

export const Title = styled.span`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.font};
  line-height: 22px;
  margin-bottom: 6px;
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
