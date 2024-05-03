import React from "react";
import styled, { keyframes } from "styled-components";

import useUi from "../contexts/ui/useUi";

const rotate = keyframes`
  to {
      transform: rotate(1turn);
    }
`;

export const Loader = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;
`;

const Loading: React.FC = () => {
  const { theme } = useUi();

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.colors.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader />
    </div>
  );
};

export default Loading;
