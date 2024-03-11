import React from 'react';
import { Slider as RnSlider } from '@miblanchard/react-native-slider';
import useUi from '../../contexts/ui/useUi';
import {
  Container,
  IndicatorLabel,
  IndicatorsView,
  Label,
  SliderContainer,
} from './styles';

interface PropTypes {
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  value: number;
  label?: string;
}

const Slider: React.FC<PropTypes> = ({ min, max, onChange, value, label }) => {
  const { theme } = useUi();

  return (
    <Container>
      <Label>{label}</Label>
      <SliderContainer>
        <RnSlider
          minimumValue={min || 0}
          maximumValue={max || 99}
          step={1}
          onValueChange={(value) =>
            typeof value === 'number' ? onChange(value) : onChange(value[0])
          }
          value={value}
          thumbTintColor={theme.colors.action}
          minimumTrackTintColor={theme.colors.action}
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
