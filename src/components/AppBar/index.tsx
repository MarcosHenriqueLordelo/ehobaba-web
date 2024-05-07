import React from "react";

import { Container, Label, LeftContainer, RightContainer } from "./styles";

import useUi from "../../contexts/ui/useUi";

import IconButton from "../IconButton";
import { MdArrowBack } from "react-icons/md";

interface PropTypes {
  title?: string;
  primaryAction?: () => JSX.Element;
  secondaryAction?: () => JSX.Element;
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
            renderIcon={() => (
              <MdArrowBack size={24} color={theme.colors.action} />
            )}
            style={{ marginRight: 16 }}
          />
        )}
        <Label>{title}</Label>
      </LeftContainer>
      <RightContainer>
        {primaryAction && (
          <IconButton
            onPress={onPrimaryAction}
            size={24}
            renderIcon={primaryAction}
            style={{ marginLeft: 24 }}
          />
        )}
        {secondaryAction && (
          <IconButton
            onPress={onSecondaryAction}
            size={24}
            renderIcon={secondaryAction}
            style={{ marginLeft: 24 }}
          />
        )}
      </RightContainer>
    </Container>
  );
};

export default AppBar;
