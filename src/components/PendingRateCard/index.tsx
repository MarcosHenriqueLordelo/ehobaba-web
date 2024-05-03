import React from "react";

import IconButton from "../IconButton";
import { MdLocationOn } from "react-icons/md";

import { Container, Subtitle, Title, TitleContainer, Content } from "./styles";
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
      <Content>
        <IconButton
          size={24}
          renderIcon={() => (
            <MdLocationOn color={theme.colors.font} size={24} />
          )}
        />
        <TitleContainer>
          <Title>{location}</Title>
          <Subtitle>{moment(timestamp).format("DD/MM/YYYY")}</Subtitle>
        </TitleContainer>
      </Content>
    </Container>
  );
};

export default PendingRateCard;
