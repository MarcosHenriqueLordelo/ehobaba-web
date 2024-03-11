import styled from "styled-components";

interface ContainerProps {
  selected?: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ selected, theme }) =>
    selected && `background-color:${theme.colors.background}`};
  flex-direction: row;
  align-items: center;
  padding: 6px;
`;

export const PlayerName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font};
`;
