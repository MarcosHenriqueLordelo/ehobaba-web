import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

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
} from './styles';

import useUi from '../../contexts/ui/useUi';

import Score from '../Score';
import Rating from '../Rating';
import moment from 'moment';

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
    const bornYear = parseInt(bornDay.split('/')[2]);
    const actualYear = moment().year();

    const age = actualYear - bornYear;

    return age;
  };

  return (
    <Container ref={captureRef}>
      <LinearGradient
        colors={[theme.colors.action, theme.colors.section]}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 12,
          position: 'absolute',
          borderWidth: 2,
          borderColor: theme.colors.action,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <TopContainer>
        <PlayerImage source={{ uri: photoUrl }} resizeMode="cover" />
        <LeftContainer>
          <AvarageContainer>
            <Retangle>
              <RetangleBackground />
              <AvarageLabel>{`${avarage < 10 ? '0' : ''}${Math.trunc(
                avarage
              )}`}</AvarageLabel>
            </Retangle>
            <TriangleDown />
          </AvarageContainer>
          <PlayerName>{name}</PlayerName>
        </LeftContainer>
        <RightContainer>
          <Flag
            source={{ uri: `https://countryflagsapi.com/png/${country}` }} //transformar pra scr
            resizeMode="contain"
          />
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
