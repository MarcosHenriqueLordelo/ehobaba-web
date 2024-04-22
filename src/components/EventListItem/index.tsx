import React from "react";
import moment from "moment";

import IconButton from "../IconButton";
import { MdOutlineDelete } from "react-icons/md";

import {
  Container,
  DeleteContainer,
  Info,
  LeftContainer,
  Name,
} from "./styles";
import useUi from "../../contexts/ui/useUi";

interface PropTypes {
  itemData: EventListItem;
  onDelete?: (id: string) => void;
  showDelete?: boolean;
}

const EventListItem: React.FC<PropTypes> = ({
  itemData: { id, playerName, timestamp, type },
  onDelete,
  showDelete,
}) => {
  const { theme } = useUi();
  const getInfoLabel = () => moment.unix(timestamp).format("HH:mm");

  return (
    <Container>
      <LeftContainer>
        <Name>{playerName}</Name>
        <Info>{`${type} - ${getInfoLabel()}`}</Info>
      </LeftContainer>
      {onDelete && showDelete && (
        <DeleteContainer onClick={() => onDelete(id)}>
          <IconButton
            size={24}
            renderIcon={() => (
              <MdOutlineDelete color={theme.colors.font} size={24} />
            )}
          />
        </DeleteContainer>
      )}
    </Container>
  );
};

export default EventListItem;
