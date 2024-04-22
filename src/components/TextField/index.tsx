import React, { useEffect, useState } from "react";
import IconButton from "../IconButton";

import {
  Container,
  TextInput,
  Label,
  ErrorLabel,
  BackgroundContainer,
} from "./styles";

interface PropTypes {
  onValueChanged?: (value: string) => void;
  value: string;
  label: string;
  error?: string;
  modal?: boolean;
  placeholder?: string;
  password?: boolean;
  selectList?: { label: string; value: any }[];
  action?: {
    renderIcon: () => JSX.Element;
    onAction: () => void;
  };
}

const TextField: React.FC<PropTypes> = ({
  value,
  onValueChanged = () => {},
  label,
  error,
  modal,
  placeholder,
  password,
  action,
}) => {
  const [focused, setFocused] = useState(false);
  const [labelUp, setLabelUp] = useState(false);

  useEffect(() => {
    if (focused || value !== "") setLabelUp(true);
    else setLabelUp(false);
  }, [value, focused]);

  const getPlaceholder = (): string => {
    if (focused && placeholder) return placeholder;
    return label.charAt(0).toUpperCase() + label.slice(1);
  };

  const getCorrectInput = () => {
    return (
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={({ target: { value } }) => onValueChanged(value)}
        value={value}
        placeholder={getPlaceholder()}
        type={password ? "password" : "text"}
        autoComplete='off'
      />
    );
  };

  return (
    <Container modal={modal}>
      <Label focused={labelUp}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </Label>
      <BackgroundContainer modal={modal}>
        {getCorrectInput()}
        {action && (
          <IconButton
            onPress={action.onAction}
            size={32}
            style={{ marginRight: 8 }}
            renderIcon={action.renderIcon}
          />
        )}
      </BackgroundContainer>

      {error && (
        <ErrorLabel>
          {error.charAt(0).toUpperCase() + error.slice(1)}
        </ErrorLabel>
      )}
    </Container>
  );
};

export default TextField;
