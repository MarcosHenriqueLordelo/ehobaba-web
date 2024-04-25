import styled, { DefaultTheme } from "styled-components";

interface ContainerProps {
  dark?: boolean;
  primary?: boolean;
  transparent?: boolean;
  labelAction?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const getBackgroundColor = (
  theme: DefaultTheme,
  dark?: boolean,
  transparent?: boolean
): string => {
  if (transparent) return 'transparent';

  if (dark) return theme.colors.section;

  return theme.colors.action;
};

const getLabelColor = (theme: DefaultTheme, labelAction?: boolean): string => {
  if (labelAction) return theme.colors.action;

  return '#FFFFFF';
};

export const Container = styled.button<ContainerProps>`
  border-radius: 10px;
  background-color: ${({ theme, dark, transparent }) =>
    getBackgroundColor(theme, dark, transparent)};
  padding: 10px 24px;
  justify-content: center;
  position: relative;
  ${({ transparent }) => transparent && `background-color: transparent;`};
`;

export const Label = styled.p<ContainerProps>`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme, labelAction }) => getLabelColor(theme, labelAction)};
  line-height: 20px;
  ${({ disabled }) => disabled && `opacity: 0.3;`}
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

export const ActivityLoader = styled.div`
    size: small; 
`;
