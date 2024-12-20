import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  flex: 1;
`;

interface ActionsContainerProps {
  center?: boolean;
}

export const ActionsContainer = styled.div<ActionsContainerProps>`
  flex-direction: row;
  justify-content: ${({ center }) => (center ? "center" : "space-around")};
  margin: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-top: 16px;
  align-self: center;
`;

export const ImageContainer = styled.div`
  margin-top: 16px;
  align-self: center;
`;

export const PlayerName = styled.span`
  margin: 10px;
  align-self: center;
  text-align: center;
  line-height: 28px;
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
`;
