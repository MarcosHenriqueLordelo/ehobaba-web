import React from "react";

import { Container, ErrorLabel, Input, Label } from "./styles";

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
}) => {
  return (
    <Container modal={modal}>
      <Label htmlFor={id}>{label}</Label>
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
      <ErrorLabel>{error}</ErrorLabel>
    </Container>
  );
};

export default TextField;
