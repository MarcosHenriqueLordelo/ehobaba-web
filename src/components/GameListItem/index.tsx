import React from "react";
import { Container, LeftContainer, Location, Date } from "./styles";
import useUi from "../../contexts/ui/useUi";
import moment from "moment";

import IconButton from "../IconButton";
import { MdLocationOn } from "react-icons/md";

interface PropTypes {
  itemData: {
    location: string;
    id: string;
    babaId: string;
    timestamp: number;
  };
  onPress?: (gameId: string, BabaId: string) => void;
}

const GameListItem: React.FC<PropTypes> = ({
  itemData: { location, id, babaId, timestamp },
  onPress,
}) => {
  const { theme } = useUi();

  return (
    <Container onClick={() => onPress && onPress(id, babaId)}>
      <LeftContainer>
        <IconButton
          size={24}
          renderIcon={() => (
            <MdLocationOn color={theme.colors.font} size={24} />
          )}
        />

        <Location>{location}</Location>
      </LeftContainer>
      <Date>{moment.unix(timestamp).format("DD/MM/YYYY")}</Date>
    </Container>
  );
};

export default GameListItem;
