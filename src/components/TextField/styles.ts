import styled from "styled-components";

interface BackgroundProps {
  modal?: boolean;
}

export const Container = styled.div<BackgroundProps>`
  width: ${({ modal }) => (modal ? `100%` : `80%`)};
  padding-top: 26px;
  position: relative;
`;

export const BackgroundContainer = styled.div<BackgroundProps>`
  background-color: ${({ theme, modal }) =>
    modal ? theme.colors.background : theme.colors.section};
  border-radius: 6px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextInput = styled.input`
  height: 56px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.font};
  font-size: 16px;
  font-weight: 400;
  flex: 1;
  &::placeholder {
    color: ${({ theme }) => theme.colors.font};
  }
`;

export const DropDownLabel = styled.p`
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.font};
  font-size: 16px;
  font-weight: 400;
`;

interface LabelProps {
  focused?: boolean;
}

export const Label = styled.p<LabelProps>`
  color: ${({ theme }) => theme.colors.action};
  position: absolute;
  margin-top: ${({ focused }) => (focused ? 12 : 50)}px;
  margin-left: ${({ focused }) => (focused ? 10 : 16)}px;
  z-index: ${({ focused }) => (focused ? 10 : 0)};
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
`;

export const ErrorLabel = styled.p`
  color: red;
  font-size: 11px;
  margin-top: 2px;
  margin-left: 6px;
`;