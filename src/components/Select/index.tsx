import React, { useMemo } from "react";
import { OptionItem, SelectContainer } from "./styles";

interface PropTypes {
  data: { label: string; value: number }[];
  onChange: (value: number) => void;
  value: number;
}

const Select: React.FC<PropTypes> = ({ data, onChange, value }) => {
  const selected = useMemo(() => value !== 0, [value]);

  return (
    <SelectContainer
      selected={selected}
      onChange={({ target: { value } }) => onChange(parseInt(value))}
      value={value}
    >
      {data.map((option) => (
        <OptionItem value={option.value}>{option.label}</OptionItem>
      ))}
    </SelectContainer>
  );
};

export default Select;
