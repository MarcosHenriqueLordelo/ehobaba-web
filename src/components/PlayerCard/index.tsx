import React from "react";

import {
  AvarageContainer,
  AvarageLabel,
  BottomContainer,
  Container,
  Flag,
  LeftContainer,
  MidInfoContainer,
  MidlTitle,
  MidlValue,
  MidRowContainer,
  PlayerImage,
  PlayerName,
  RatingContainer,
  Retangle,
  RetangleBackground,
  RightContainer,
  TopContainer,
  TriangleDown,
} from "./styles";

import useUi from "../../contexts/ui/useUi";

import Score from "../Score";
import Rating from "../Rating";
import moment from "moment";

interface PropTypes {
  data: Info;
  captureRef: React.MutableRefObject<null>;
}

const PlayerCard: React.FC<PropTypes> = ({
  data: {
    score,
    name,
    country,
    rating,
    avarage,
    bornDay,
    position,
    games,
    photoUrl,
  },
  captureRef,
}) => {
  const { theme, strings } = useUi();

  const getAge = () => {
    const bornYear = parseInt(bornDay.split("/")[2]);
    const actualYear = moment().year();

    const age = actualYear - bornYear;

    return age;
  };

  return (
    <Container ref={captureRef}>
      <TopContainer>
        <PlayerImage src={photoUrl} />
        <LeftContainer>
          <AvarageContainer>
            <Retangle>
              <AvarageLabel>{`${avarage < 10 ? "0" : ""}${Math.trunc(
                avarage
              )}`}</AvarageLabel>
            </Retangle>
          </AvarageContainer>
          <PlayerName>{name}</PlayerName>
        </LeftContainer>
        <RightContainer>
          <Flag src={`https://flagcdn.com/w160/${country.toLowerCase()}.png`} />
          <RatingContainer>
            <Rating rating={rating} />
          </RatingContainer>
        </RightContainer>
      </TopContainer>
      <BottomContainer>
        <MidRowContainer>
          <MidInfoContainer>
            <MidlTitle>{strings.age}</MidlTitle>
            <MidlValue>{`${getAge()}`}</MidlValue>
          </MidInfoContainer>
          <MidInfoContainer>
            <MidlTitle>{strings.position}</MidlTitle>
            <MidlValue>{position}</MidlValue>
          </MidInfoContainer>
          <MidInfoContainer>
            <MidlTitle>{strings.games}</MidlTitle>
            <MidlValue>{games}</MidlValue>
          </MidInfoContainer>
        </MidRowContainer>
        <Score score={score} />
      </BottomContainer>
    </Container>
  );
};

export default PlayerCard;
