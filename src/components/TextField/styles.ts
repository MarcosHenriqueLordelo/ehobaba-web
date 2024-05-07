import styled from "styled-components";

interface InputProps {
  modal?: boolean;
}

export const Container = styled.div<InputProps>`
  &:not(:last-child) {
    ${({ modal }) => !modal && "margin-bottom: 2rem;"}
  }

  input:invalid + label {
    color: ${(props) => props.theme.colors.error};
  }

  ${({ modal }) => !modal && "width: 90%;"}
`;

export const Input = styled.input<InputProps>`
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: ${({ theme, modal }) =>
    modal ? theme.colors.background : theme.colors.section};
  color: ${(props) => props.theme.colors.font};
  border: none;
  transition: all 0.2s;
  border-bottom: 0.3rem solid transparent;
  border-radius: 12px;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 0.3rem solid ${(props) => props.theme.colors.action};

    &:invalid {
      border-bottom: 0.3rem solid ${(props) => props.theme.colors.error};
    }
  }

  &focus &::placeholder {
    color: ${(props) => props.theme.colors.font};
  }

  &:invalid {
    border-bottom: 0.3rem solid ${(props) => props.theme.colors.error};
  }
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${(props) => props.theme.colors.action};
  font-weight: 700;
  margin-left: 2rem;
  margin-bottom: 8px;
  cursor: text;
`;

export const ErrorLabel = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.error};
  margin-left: 1.5rem;
  margin-top: 2px;
  cursor: text;
`;
