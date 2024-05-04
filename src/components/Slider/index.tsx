import React, { HTMLProps, RefCallback } from "react";
import {
  Container,
  IndicatorLabel,
  IndicatorsView,
  Label,
  SliderContainer,
  StyledSlider,
  StyledThumb,
  StyledTrack,
} from "./styles";

interface PropTypes {
  min?: number;
  max?: number;
  onChange: (value: number | readonly number[]) => void;
  value: number;
  label?: string;
}

interface HTMLPropsWithRefCallback<T> extends HTMLProps<T> {
  ref: RefCallback<T>;
}

const Slider: React.FC<PropTypes> = ({ min, max, onChange, value, label }) => {
  const Track = (
    props: HTMLPropsWithRefCallback<HTMLDivElement>,
    state: {
      index: number;
      value: number | readonly number[];
    }
  ) => <StyledTrack {...props} index={state.index} />;

  const Thumb = (
    props: HTMLPropsWithRefCallback<HTMLDivElement>,
    state: {
      index: number;
      value: number | readonly number[];
      valueNow: number;
    }
  ) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

  return (
    <Container>
      <Label>{label}</Label>
      <SliderContainer>
        <StyledSlider
          min={min || 0}
          max={max || 99}
          step={1}
          value={value}
          onChange={onChange}
          renderTrack={Track}
          renderThumb={Thumb}
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
