import styled from "styled-components";

interface ItemProps {
  selected?: boolean;
}

export const Container = styled.div`
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.section};
  height: 8%;
  width: 90%;
  margin-top: 10px;
  margin-bottom: 16px;
`;

export const ItemContainer = styled.div`
cursor: pointer;
pointer-events: initial;
height: 20%;
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
margin-bottom: 10%;
margin-top: auto;
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
     opacity: 1;`}
`;

export const IconContainer = styled.div<ItemProps>`
  transform: translateY(8px);
  ${({ selected, theme }) =>
    selected &&
    `border-radius:40px;
     background-color: ${theme.colors.background};
     transform:translateY(-10px) scale(1.1);`}
  transition: all 0.5s;
`;
