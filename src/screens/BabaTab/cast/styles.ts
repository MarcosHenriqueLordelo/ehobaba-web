import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: scroll;
  max-height: ${window.innerHeight - 150}px;
`;
