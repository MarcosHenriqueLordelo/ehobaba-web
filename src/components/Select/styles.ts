import styled from "styled-components";

interface SelectProps {
  selected?: boolean;
  error?: boolean;
}

export const SelectContainer = styled.select<SelectProps>`
  font-size: ${({ theme }) => theme.fonts.medium};
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.colors.section};
  color: ${(props) => props.theme.colors.font};
  border: none;
  transition: all 0.2s;
  border-bottom: 0.3rem solid transparent;
  width: 30rem;
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
`;

export const OptionItem = styled.option`
  font-size: ${({ theme }) => theme.fonts.medium};
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.theme.colors.section};
  color: ${(props) => props.theme.colors.font};
`;
