import React from "react";
import ReactSlider from "react-slider";
import {
  Container,
  IndicatorLabel,
  IndicatorsView,
  Label,
  SliderContainer,
} from "./styles";

interface PropTypes {
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  value: number;
  label?: string;
}

const Slider: React.FC<PropTypes> = ({ min, max, onChange, value, label }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <SliderContainer>
        <ReactSlider
          min={min || 0}
          max={max || 99}
          step={1}
          onChange={onChange}
          value={value}
        />
      </SliderContainer>

      <IndicatorsView>
        <IndicatorLabel action>{value || 0}</IndicatorLabel>
        <IndicatorLabel>{max || 99}</IndicatorLabel>
      </IndicatorsView>
    </Container>
  );
};

export default Slider;
