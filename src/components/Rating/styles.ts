import styled from "styled-components";

interface ContainerProps {
  row?: boolean;
}
export const Container = styled.div<ContainerProps>`
  ${({ row }) => row && 'flex-direction: row; '}
`;

interface ItemProps {
  lastItem?: boolean;
  row?: boolean;
}

interface LabelProps {
  white?: boolean;
}

export const ItemContainer = styled.div<ItemProps>`
  ${({ lastItem, row }) =>
    !lastItem && `${row ? 'margin-right:20px;' : 'margin-bottom:6px'};`}
  justify-content: center;
  align-items: center;
  
  ;
`;

export const ItemLabel = styled.p<LabelProps>`
  color: ${({ theme, white }) => (white ? '#FFFFFF' : theme.colors.font)};
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
`;

export const ItemValue = styled.p<LabelProps>`
  color: ${({ theme, white }) => (white ? '#FFFFFF' : theme.colors.font)};
  font-size: 15px;
  font-weight: bold;
`;
