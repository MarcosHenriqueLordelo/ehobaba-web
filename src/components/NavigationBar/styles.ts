import styled from "styled-components";

interface ItemProps {
  selected?: boolean;
}

export const Container = styled.div`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.section};
  height: 50px;
  width: 90%;
  margin-top: 10px;

  position: absolute;
  bottom: 16px;
`;

export const ItemContainer = styled.div`
  cursor: pointer;
  pointer-events: initial;

  align-items: center;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

export const ItemLabel = styled.p<ItemProps>`
  line-height: 16px;
  font-size: 11px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.action};
  text-transform: uppercase;
  transition: all 0.5s;
  opacity: 0;

  transform: translateY(-1px);

  ${({ selected }) =>
    selected &&
    `border-radius:50px;
     transform:translateY(-8px);
     opacity: 1;`}
`;

export const IconContainer = styled.div<ItemProps>`
  transform: translateY(8px);
  ${({ selected, theme }) =>
    selected &&
    `border-radius:50px;
     background-color: ${theme.colors.background};
     transform:translateY(-18px) scale(1.1);`}
  padding: 8px;
  transition: all 0.5s;
`;
