import React from 'react';
import styled from 'styled-components/native';

interface PropTypes {
  selected?: boolean;
  onPress?: () => void;
  label: string;
}

interface ContainerProps {
  selected?: boolean;
}

const Container = styled.TouchableOpacity<ContainerProps>`
  height: 32px;
  padding: 0px 16px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  ${({ theme, selected }) =>
    selected && `background-color:${theme.colors.action}`};
`;
const Label = styled.Text`
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
`;

const TypeSelectableChip: React.FC<PropTypes> = ({
  selected,
  onPress,
  label,
}) => {
  return (
    <Container selected={selected} onPress={onPress}>
      <Label>{label}</Label>
    </Container>
  );
};

export default TypeSelectableChip;