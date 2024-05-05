import { styled } from "styled-components";

interface ContainerProps {
  visible: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  
  ;
  width: "100%";
  bottom: 16px;
  left: 16px;
  transition: all 0.2s;
  z-index: -1000;

  ${({ visible }) => visible && "z-index:1000;"}
`;

export const Content = styled.div`
  flex: 1;
  flex-direction: row;
  
  margin: 8px 10px;
  padding: 8px 0px;
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 10px;
  align-items: center;
`;

export const Message = styled.span`
  color: #ffffff;
  font-size: 16px;
  margin-left: 16px;
`;
