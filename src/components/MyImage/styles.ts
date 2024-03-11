import styled from "styled-components";

interface PropTypes {
  size: number;
  rounded?: boolean;
}

export const Img = styled.img<PropTypes>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  ${({ rounded }) => rounded && `border-radius:100px;`}
`;
