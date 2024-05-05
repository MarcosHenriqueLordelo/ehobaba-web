import styled from "styled-components";

interface ContainerProps {
  color: string;
}

interface LabelProps {
  disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  
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