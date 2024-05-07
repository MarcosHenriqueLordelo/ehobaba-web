import React from "react";
import styled from "styled-components";

interface PropTypes {
  open?: boolean;
  children?: React.ReactNode;
}

const ModalContainer: React.FC<PropTypes> = ({ open, children }) => {
  return <Content open={open}>{children}</Content>;
};

const Content = styled.div<PropTypes>`
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  z-index: 2000;

  visibility: hidden;

  ${({ open }) => open && "visibility: visible;"}
`;

export default ModalContainer;
