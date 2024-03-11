import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  flex-direction: row;
  justify-content: space-between;
  padding: 14px 10px;
  margin-right: 10px;
  width: 90%;
  align-self: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleContainer = styled.div`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.p`
  margin-left: 8px;
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
