import React from "react";
import {
  Container,
  Content,
  DeleteBtnContainer,
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
    <Container onDelete={onDelete !== undefined}>
      <Content>
        <LeftContainer>
          <Name>{name}</Name>
          <Score score={score} />
        </LeftContainer>
        <PositionLabel>{`#${index < 10 && "0"}${index}`}</PositionLabel>
        {onDelete && (
          <DeleteBtnContainer>
            <IconButton
              size={16}
              renderIcon={() => (
                <MdOutlineDelete color={theme.colors.font} size={16} />
              )}
              onPress={onDelete}
            />
          </DeleteBtnContainer>
        )}
      </Content>
    </Container>
  );
};

export default PlayerListItem;
