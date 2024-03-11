import React from 'react';
import useUi from '../../contexts/ui/useUi';
import { Container, ItemContainer, ItemLabel, ItemValue } from './styles';

interface PropTypes {
  score: Score;
  white?: boolean;
}

const Score: React.FC<PropTypes> = ({
  score: { gol, ass, def, des, fal },
  white,
}) => {
  const { strings } = useUi();

  return (
    <Container>
      <ItemContainer>
        <ItemLabel white={white}>{strings.gol}</ItemLabel>
        <ItemValue white={white}>
          {gol < 10 && `0`}
          {Math.trunc(gol)}
        </ItemValue>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel white={white}>{strings.ass}</ItemLabel>
        <ItemValue white={white}>
          {ass < 10 && `0`}
          {Math.trunc(ass)}
        </ItemValue>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel white={white}>{strings.def}</ItemLabel>
        <ItemValue white={white}>
          {def < 10 && `0`}
          {Math.trunc(def)}
        </ItemValue>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel white={white}>{strings.des}</ItemLabel>
        <ItemValue white={white}>
          {des < 10 && `0`}
          {Math.trunc(des)}
        </ItemValue>
      </ItemContainer>
      <ItemContainer lastItem>
        <ItemLabel white={white}>{strings.fal}</ItemLabel>
        <ItemValue white={white}>
          {fal < 10 && `0`}
          {Math.trunc(fal)}
        </ItemValue>
      </ItemContainer>
    </Container>
  );
};

export default Score;
