import React from 'react';
import IconButton from '../IconButton'

import {
  BottomContainer,
  Container,
  HeaderContainer,
  Subtitle,
  Title,
  TitleContainer,
} from './styles';
import useUi from '../../contexts/ui/useUi';
import Score from '../Score';
import moment from 'moment';

interface PropTypes {
  cardData: {
    score?: Score;
    location: string;
    timestamp: number;
    id: string;
  };
  onPress?: (id: string) => void;
}

const GameItemCard: React.FC<PropTypes> = ({
  cardData: { score, location, timestamp, id },
  onPress,
}) => {
  const { theme } = useUi();

  return (
    <Container onPress={() => onPress && onPress(id)}>
      <HeaderContainer>
        <IconButton size={24} name="location-on" color={theme.colors.font} />
        <TitleContainer>
          <Title>{location}</Title>
          <Subtitle>{moment.unix(timestamp).format('DD/MM/YYYY')}</Subtitle>
        </TitleContainer>
      </HeaderContainer>
      {score && (
        <BottomContainer>
          <Score score={score} />
        </BottomContainer>
      )}
    </Container>
  );
};

export default GameItemCard;
