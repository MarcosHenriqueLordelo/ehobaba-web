import React, { useMemo } from "react";
import { Label, OptionItem, SelectContainer } from "./styles";

interface PropTypes {
  data: { label: string; value: number | string }[];
  onChange: (value: number | string) => void;
  value: number | string;
  label: string;
}

const Select: React.FC<PropTypes> = ({ data, onChange, value, label }) => {
  const selected = useMemo(() => value !== 0, [value]);

  return (
    <div style={{ width: "90%" }}>
      <Label>{label}</Label>
      <SelectContainer
        selected={selected}
        onChange={({ target: { value } }) => onChange(parseInt(value))}
        value={value}
      >
        {data.map((option) => (
          <OptionItem value={option.value}>{option.label}</OptionItem>
        ))}
      </SelectContainer>
    </div>
  );
};

export default Select;
