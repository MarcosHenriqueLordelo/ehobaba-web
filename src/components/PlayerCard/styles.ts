import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 500px;
  align-items: center;
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.action},
    ${({ theme }) => theme.colors.action}
  );
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.p`
  flex: 1;
  width: 90%;
  flex-direction: row;
  position: relative;
`;

export const BottomContainer = styled.p`
  padding: 8px;
  width: 90%;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.font};
  height: 110px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const AvarageContainer = styled.div``;

export const Retangle = styled.div`
  width: 70px;
  height: 60px;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const RetangleBackground = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.action};
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;

export const TriangleDown = styled.div`
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

export const AvarageLabel = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font};
  opacity: 1;
`;

export const LeftContainer = styled.div`
  flex: 1;
  justify-content: space-between;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  flex: 1;
  align-items: flex-end;
  padding-top: 8px;
  display: flex;
`;

export const MidRowContainer = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

export const MidInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MidlTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
  flex-wrap: wrap;
`;

export const MidlValue = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font};
  flex-wrap: wrap;
  align-self: center;
`;

export const PlayerName = styled.p`
  line-height: 36px;
  font-size: 30px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
  flex-wrap: wrap;
`;

export const Flag = styled.img`
  width: 50px;
  height: 35px;
  border-radius: 100px;
`;

export const RatingContainer = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const PlayerImage = styled.img`
  width: 100%;
  height: 90%;
  position: absolute;
  bottom: 0px;
`;
