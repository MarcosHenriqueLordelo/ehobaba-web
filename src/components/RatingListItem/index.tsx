import React from "react";
import {
  Container,
  LeftContainer,
  Name,
  PositionLabel,
  RowContainer,
  ValueIndicator,
  ValueIndicatorContainer,
  ValueLabel,
} from "./styles";

interface PropTypes {
  itemData: RatingListItem;
  index: number;
}

const RatingListItem: React.FC<PropTypes> = ({
  itemData: { playerName, avarage },
  index,
}) => {
  return (
    <Container>
      <LeftContainer>
        <RowContainer>
          <Name>{playerName}</Name>
          <PositionLabel>{`${index}°`}</PositionLabel>
        </RowContainer>
        <RowContainer>
          <ValueIndicatorContainer>
            <ValueIndicator width={avarage} />
          </ValueIndicatorContainer>
          <ValueLabel>{avarage}</ValueLabel>
        </RowContainer>
      </LeftContainer>
    </Container>
  );
};

export default RatingListItem;
