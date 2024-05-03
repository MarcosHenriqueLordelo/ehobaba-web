import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.action},
    ${({ theme }) => theme.colors.background} 70%
  );
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.action};
`;

export const TopContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  position: relative;
  width: 90%;
`;

export const BottomContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 90%;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.font};
  height: 110px;
`;

export const AvarageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Retangle = styled.div`
  width: 70px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const RetangleBackground = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.action};
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;

export const TriangleDown = styled.div`
  display: flex;
  flex-direction: column;
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 35px;
  border-right-width: 35px;
  border-bottom-width: 30px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${({ theme }) => theme.colors.action};
  transform: rotate(180deg);
  opacity: 0.6;
`;

export const AvarageLabel = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font};
  opacity: 1;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  padding-bottom: 8px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  padding-top: 8px;
`;

export const MidRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const MidInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MidlTitle = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
  flex-wrap: wrap;
  display: flex;
`;

export const MidlValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font};
  flex-wrap: wrap;
  align-self: center;
`;

export const PlayerName = styled.span`
  line-height: 36px;
  font-size: 30px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
  flex-wrap: wrap;
  z-index: 1;
`;

export const Flag = styled.img`
  width: 60px;
  height: 35px;
  border-radius: 50px;
  object-fit: cover;
  z-index: 1;
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  z-index: 1;
`;

export const PlayerImage = styled.img`
  width: 100%;
  height: 90%;
  position: absolute;
  bottom: 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.font};
`;
