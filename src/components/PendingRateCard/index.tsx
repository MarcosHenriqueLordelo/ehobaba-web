import React from "react";

import IconButton from "../IconButton";
import { MdLocationOn } from "react-icons/md";

import { Container, Subtitle, Title, TitleContainer } from "./styles";
import useUi from "../../contexts/ui/useUi";
import moment from "moment";

interface PropTypes {
  cardData: {
    location: string;
    id: string;
    timestamp: number;
    babaId: string;
  };
  onPress?: (id: string) => void;
}

const PendingRateCard: React.FC<PropTypes> = ({
  cardData: { location, timestamp, id },
  onPress,
}) => {
  const { theme } = useUi();

  return (
    <Container onClick={() => onPress && onPress(id)}>
      <TitleContainer>
        <IconButton
          size={24}
          renderIcon={() => (
            <MdLocationOn color={theme.colors.font} size={24} />
          )}
        />
        <Title>{location}</Title>
      </TitleContainer>
      <Subtitle>{moment(timestamp).format("DD/MM/YYYY")}</Subtitle>
    </Container>
  );
};

export default PendingRateCard;
