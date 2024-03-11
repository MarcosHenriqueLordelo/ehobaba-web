import React from 'react';
import useUi from '../../contexts/ui/useUi';
import { Container, ItemContainer, ItemLabel, ItemValue } from './styles';

interface PropTypes {
  rating: Rating;
  white?: boolean;
  row?: boolean;
}

const Rating: React.FC<PropTypes> = ({
  rating: { chu, dri, mar, pas, rac, vel },
  white,
  row,
}) => {
  const { strings } = useUi();

  return (
    <Container row={row}>
      <ItemContainer row={row}>
        <ItemLabel white={white}>{strings.vel}</ItemLabel>
        <ItemValue white={white}>
          {vel < 10 && `0`}
          {Math.trunc(vel)}
        </ItemValue>
      </ItemContainer>
      <ItemContainer row={row}>
        <ItemLabel white={white}>{strings.chu}</ItemLabel>
        <ItemValue white={white}>
          {chu < 10 && `0`}
          {Math.trunc(chu)}
        </ItemValue>
      </ItemContainer>
      <ItemContainer row={row}>
        <ItemLabel white={white}>{strings.pas}</ItemLabel>
        <ItemValue white={white}>
          {pas < 10 && `0`}
          {Math.trunc(pas)}
        </ItemValue>
      </ItemContainer>
      <ItemContainer row={row}>
        <ItemLabel white={white}>{strings.mar}</ItemLabel>
        <ItemValue white={white}>
          {mar < 10 && `0`}
          {Math.trunc(mar)}
        </ItemValue>
      </ItemContainer>
      <ItemContainer row={row}>
        <ItemLabel white={white}>{strings.dri}</ItemLabel>
        <ItemValue white={white}>
          {dri < 10 && `0`}
          {Math.trunc(dri)}
        </ItemValue>
      </ItemContainer>
      <ItemContainer row={row} lastItem>
        <ItemLabel white={white}>{strings.rac}</ItemLabel>
        <ItemValue white={white}>
          {rac < 10 && `0`}
          {Math.trunc(rac)}
        </ItemValue>
      </ItemContainer>
    </Container>
  );
};

export default Rating;
