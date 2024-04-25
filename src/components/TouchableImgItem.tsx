import React from "react";
import styled from "styled-components";
import useUi from "../contexts/ui/useUi";

interface PropTypes {
  selected?: boolean;
  player: Player;
  onPress: () => void;
}

interface ImageProps {
  selected?: boolean;
}

const Container = styled.div``;
const PlayerImg = styled.img<ImageProps>`
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
    <Container onClick={onPress}>
      <PlayerImg
        style={
          selected ? { borderColor: theme.colors.action, borderWidth: 2 } : {}
        }
        selected={selected}
        src={player.photoUrl}
      />
    </Container>
  );
};

export default TouchableImgItem;
