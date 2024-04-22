import React from "react";
import {
  Container,
  Content,
  LeftContainer,
  Name,
  PositionLabel,
} from "./styles";

import Score from "../Score";

import useUi from "../../contexts/ui/useUi";

import IconButton from "../IconButton";
import { MdOutlineDelete } from "react-icons/md";

interface PropTypes {
  itemData: ScoreBoardItem;
  index: number;
  onDelete?: () => void;
}

const PlayerListItem: React.FC<PropTypes> = ({
  itemData: { name, score },
  index,
  onDelete,
}) => {
  const { theme } = useUi();

  return (
    <Container>
      {!onDelete ? (
        <Content>
          <LeftContainer>
            <Name>{name}</Name> //TODO: passar para dentro do estilo o número de
            linhas DONE
            <Score score={score} />
          </LeftContainer>
          <PositionLabel>{`#${index < 10 && "0"}${index}`}</PositionLabel>
        </Content>
      ) : (
        <Content>
          <LeftContainer>
            <Name>{name}</Name>
            <Score score={score} />
          </LeftContainer>
          <PositionLabel>{`#${index < 10 && "0"}${index}`}</PositionLabel>
          <IconButton
            size={24}
            renderIcon={() => (
              <MdOutlineDelete color={theme.colors.font} size={24} />
            )}
          />
          //TODO: descobrir como fazer ele aparecer quando arrastar o componente
          para o lado
        </Content>
      )}
    </Container>
  );
};

export default PlayerListItem;
