import React from 'react';
import MyImage from '../MyImage';
import Spacer from '../Spacer';
import { Container, PlayerName } from './styles';

interface PropTypes {
  player: { id: string; name: string; photoUrl: string };
  selected?: boolean;
  onPress?: () => void;
}

const PlayerSelectableItem: React.FC<PropTypes> = ({
  player,
  selected,
  onPress,
}) => {
  return (
    <Container onClick={onPress} selected={selected}> 
      <MyImage size={36} rounded uri={player.photoUrl} />
      <Spacer width={10} />
      <PlayerName>{player.name}</PlayerName>
    </Container>
  );
};

export default PlayerSelectableItem;
