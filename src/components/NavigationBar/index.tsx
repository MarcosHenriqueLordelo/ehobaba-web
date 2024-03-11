import React, { useState } from 'react';
import IconButton from '../IconButton'

import { LayoutAnimation } from 'react-native';

import { Container, IconContainer, ItemContainer, ItemLabel } from './styles';
import useUi from '../../contexts/ui/useUi';

type ItemType = {
  label: string;
  icon: keyof typeof MaterialIcon.glyphMap;
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
    LayoutAnimation.easeInEaseOut();

    setSelected(index);

    if (onPressItem) onPressItem(index);
  };

  const renderItems = () =>
    items.map((item, index) => (
      <ItemContainer onPress={() => handlePressed(index)} key={index}>
        <IconContainer selected={isSelected(index)}>
          <IconButton
            name={item.icon}
            size={isSelected(index) ? 26 : 24}
            color={getItemColor(index)}
          />
        </IconContainer>

        {renderItemLabel(index, item.label)}
      </ItemContainer>
    ));

  return <Container>{renderItems()}</Container>;
};

export default NavigationBar;
