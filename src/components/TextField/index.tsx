import React from "react";

import { Container, ErrorLabel, Input, Label, Content } from "./styles";
import IconButton from "../IconButton";

interface PropTypes {
  type: "text" | "email" | "password" | "number";
  id: string;
  value: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
  error?: string;
  modal?: boolean;
  maxLength?: number;
  action?: { renderIcon: () => JSX.Element; onAction: () => void };
}

const TextField: React.FC<PropTypes> = ({
  value,
  label,
  id,
  onChange,
  placeholder,
  required,
  type,
  modal,
  error,
  maxLength,
  action,
}) => {
  return (
    <Container modal={modal}>
      <Label htmlFor={id}>{label}</Label>
      <Content>
        <Input
          value={value}
          type={type}
          placeholder={placeholder}
          id={id}
          required={required}
          onChange={({ target: { value } }) => onChange && onChange(value)}
          modal={modal}
          maxLength={maxLength}
        />
        {action && (
          <IconButton
            renderIcon={action.renderIcon}
            size={24}
            onPress={action.onAction}
          />
        )}
      </Content>

      <ErrorLabel>{error}</ErrorLabel>
    </Container>
  );
};

export default TextField;
