import React from "react";
import styled, { keyframes } from "styled-components";

import useUi from "../contexts/ui/useUi";

const rotate = keyframes`
  to {
      transform: rotate(1turn);
    }
`;

const Loader = styled.div`
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.action};
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: ${rotate} 1s infinite linear;
`;

const Loading: React.FC = () => {
  const { theme } = useUi();

  return (
    <div
      style={{
        flex: 1,
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
