import styled from "styled-components";

export const Container = styled.div`
  flex-direction: row;
  display: flex;
`;

interface ItemProps {
  lastItem?: boolean;
}

interface LabelProps {
  white?: boolean;
}

export const ItemContainer = styled.div<ItemProps>`
  ${({ lastItem }) => !lastItem && `margin-right:10px;`}
  justify-content: center;
  align-items: center;
`;

export const ItemLabel = styled.p<LabelProps>`
  color: ${({ theme, white }) => (white ? "#FFFFFF" : theme.colors.font)};
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 400;
`;

export const ItemValue = styled.p<LabelProps>`
  color: ${({ theme, white }) => (white ? "#FFFFFF" : theme.colors.font)};
  font-size: 13px;
  font-weight: bold;
`;
