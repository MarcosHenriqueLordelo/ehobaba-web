import React, { useState } from "react";
import IconButton from "../IconButton";

import {
  Container,
  ContainerX,
  IconContainer,
  ItemContainer,
  ItemLabel,
} from "./styles";

type ItemType = {
  label: string;
  renderIcon: () => JSX.Element;
};

interface PropTypes {
  items: ItemType[];
  onPressItem?: (index: number) => void;
  defaultItem: number;
}

const NavigationBar: React.FC<PropTypes> = ({
  items,
  onPressItem,
  defaultItem,
}) => {
  const [selected, setSelected] = useState(defaultItem);

  const isSelected = (index: number) => index === selected;

  const handlePressed = (index: number) => {
    setSelected(index);

    if (onPressItem) onPressItem(index);
  };

  const renderItems = () =>
    items.map((item, index) => (
      <ItemContainer onClick={() => handlePressed(index)} key={index}>
        <IconContainer selected={isSelected(index)}>
          <IconButton
            renderIcon={item.renderIcon}
            size={isSelected(index) ? 26 : 24}
          />
        </IconContainer>
        <ItemLabel selected={isSelected(index)}>{item.label}</ItemLabel>
      </ItemContainer>
    ));

  return (
    <ContainerX>
      <Container>{renderItems()}</Container>
    </ContainerX>
  );
};

export default NavigationBar;
