import styled from "styled-components";
import ReactSlider from "react-slider";

export const Container = styled.div`
  width: 90%;
  align-self: center;
  margin-bottom: 16px;
`;

export const SliderContainer = styled.div``;

export const IndicatorsView = styled.div`
  flex-direction: row;

  justify-content: space-between;
  margin-top: -11px;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  transform: translateY(-6px);
`;

interface IndicatorLabelProps {
  action?: boolean;
}

export const IndicatorLabel = styled.span<IndicatorLabelProps>`
  color: ${({ theme, action }) =>
    action ? theme.colors.action : theme.colors.font};
  font-weight: bold;
  font-size: 12px;
`;

interface TrackProps {
  index: number;
}

export const StyledTrack = styled.div<TrackProps>`
  top: 5px;
  bottom: 0;
  background: ${({ index, theme }) =>
    index === 1 ? "#bbb" : theme.colors.action};
  height: 5px;
  border-radius: 10px;
`;

export const StyledThumb = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${({ theme }) => theme.colors.action};
  border-radius: 50%;
  cursor: grab;
  font-size: 0;
`;

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`;
