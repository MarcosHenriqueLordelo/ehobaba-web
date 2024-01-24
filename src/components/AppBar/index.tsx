import React from "react";

import { Container, Label, LeftContainer, RightContainer } from "./styles";

import useUi from '../../contexts/ui/useUi';

import IconButton from '../IconButton'

interface PropTypes {
  title?: string;
  primaryAction?: IconName;
  secondaryAction?: IconName;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onBack?: () => void;
}

const AppBar: React.FC<PropTypes> = ({
  title,
  primaryAction,
  secondaryAction,
  onPrimaryAction,
  onSecondaryAction,
  onBack,
}) => {
  const { theme } = useUi();

  return (
    <Container>
      <LeftContainer>
        {onBack && (
          <IconButton
            onPress={onBack}
            size={24}
            color={theme.colors.action}
            name='arrow-back'
          />
        )}
        <Label>{title}</Label>
      </LeftContainer>
      <RightContainer>
        {primaryAction && (
          <IconButton
            onPress={onPrimaryAction}
            size={24}
            color={theme.colors.action}
            name={primaryAction}
          />
        )}
        {secondaryAction && (
          <IconButton
            onPress={onSecondaryAction}
            size={24}
            color={theme.colors.action}
            name={secondaryAction}
          />
        )}
      </RightContainer>
    </Container>
  );
};

export default AppBar;
