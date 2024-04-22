import React, { useState } from "react";
import IconButton from "../IconButton";

import { Container, IconContainer, ItemContainer, ItemLabel } from "./styles";
import useUi from "../../contexts/ui/useUi";

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
  const { theme } = useUi();

  const isSelected = (index: number) => index === selected;

  const getItemColor = (index: number) =>
    isSelected(index) ? theme.colors.action : theme.colors.font;

  const renderItemLabel = (index: number, label: string) =>
    isSelected(index) && <ItemLabel>{label}</ItemLabel>;

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

        {renderItemLabel(index, item.label)}
      </ItemContainer>
    ));

  return <Container>{renderItems()}</Container>;
};

export default NavigationBar;
