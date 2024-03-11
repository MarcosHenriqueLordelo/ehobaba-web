import styled from "styled-components";

interface ContainerProps {
  color: string;
}

interface LabelProps {
  disabled?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background-color: ${({ color }) => color};
  width: 80%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const Label = styled.p<LabelProps>`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
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
