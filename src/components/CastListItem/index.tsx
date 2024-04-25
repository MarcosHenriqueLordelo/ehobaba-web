import React from "react";

import IconButton from "../IconButton";
import { MdOutlineDelete } from "react-icons/md";

import MyImage from "../MyImage";

import { Container, Content, Name } from "./styles";

import useUi from "../../contexts/ui/useUi";

interface PropTypes {
  itemData: CastListItem;
  onDelete?: () => void;
}

const CastListItem: React.FC<PropTypes> = ({
  itemData: { name, photoUrl },
  onDelete,
}) => {
  const { theme } = useUi();

  return (
    <Container>
      {!onDelete ? (
        <Content>
          <MyImage size={50} rounded uri={photoUrl} />
          <Name>{name}</Name>
        </Content>
      ) : (
        <Content>
          <MyImage size={50} rounded uri={photoUrl} />
          <Name>{name}</Name>
          <IconButton
            size={24}
            renderIcon={() => (
              <MdOutlineDelete color={theme.colors.font} size={24} />
            )}
          />
        </Content>
      )}
    </Container>
  );
};

export default CastListItem;
