import styled from "styled-components";

interface SelectProps {
  selected?: boolean;
  error?: boolean;
}

export const SelectContainer = styled.select<SelectProps>`
  font-size: ${({ theme }) => theme.fonts.medium};
  padding: 1.5rem 2rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.section};
  color: ${(props) => props.theme.colors.font};
  border: none;
  transition: all 0.2s;
  border-bottom: 0.3rem solid transparent;
  width: 100%;
  display: block;

  ${({ theme, selected, error }) =>
    selected
      ? `border-bottom: 0.3rem solid ${theme.colors.action};`
      : error
      ? `border-bottom: 0.3rem solid ${theme.colors.error};`
      : ``}

  &:focus {
    outline: none;
  }
  margin-bottom: 16px;
`;

export const OptionItem = styled.option`
  font-size: ${({ theme }) => theme.fonts.medium};
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.theme.colors.section};
  color: ${(props) => props.theme.colors.font};
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${(props) => props.theme.colors.action};
  font-weight: 700;
  margin-left: 2rem;
  margin-bottom: 8px;
  cursor: text;
`;
