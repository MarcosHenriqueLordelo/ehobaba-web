import React from 'react';
import styled from 'styled-components/native';
import useUi from '../contexts/ui/useUi';

interface PropTypes {
  selected?: boolean;
  player: Player;
  onPress: () => void;
}

interface ImageProps {
  selected?: boolean;
}

const Container = styled.TouchableOpacity``;
const PlayerImg = styled.Image<ImageProps>`
  width: 35px;
  height: 35px;
  border-radius: 100px;
  ${({ selected }) => selected && `border-width: 2px;`};
  margin-right: 10px;
`;

const TouchableImgItem: React.FC<PropTypes> = ({
  selected,
  player,
  onPress,
}) => {
  const { theme } = useUi();

  return (
    <Container onPress={onPress}>
      <PlayerImg
        style={
          selected ? { borderColor: theme.colors.action, borderWidth: 2 } : {}
        }
        selected={selected}
        source={{ uri: player.photoUrl }}
      />
    </Container>
  );
};

export default TouchableImgItem;
