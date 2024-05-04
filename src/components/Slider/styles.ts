import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  align-self: center;
  margin-bottom: 16px;
`;

export const SliderContainer = styled.div``;

export const IndicatorsView = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin-top: -11px;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: -5px;
`;

interface IndicatorLabelProps {
  action?: boolean;
}

export const IndicatorLabel = styled.p<IndicatorLabelProps>`
  color: ${({ theme, action }) =>
    action ? theme.colors.action : theme.colors.font};
  font-weight: bold;
`;
