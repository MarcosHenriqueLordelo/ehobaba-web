import styled from "styled-components";

interface ItemProps {
  selected?: boolean;
}

export const Container = styled.div`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.section};
  height: 50px;
  width: 90%;
  align-self: center;
  margin-top: 10px;
`;

export const ItemContainer = styled.button`
  justify-content: flex-end;
  align-items: center;
`;

export const ItemLabel = styled.p`
  margin-top: 6px;
  margin-bottom: 6px;
  line-height: 16px;
  font-size: 11px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.action};
  text-transform: uppercase;
`;

export const IconContainer = styled.div<ItemProps>`
  ${({ selected, theme }) =>
    selected &&
    `border-radius:50px;
     background-color: ${theme.colors.background};`}
  padding: 8px;
  transition: all 1s;
`;
