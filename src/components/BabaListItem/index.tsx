import moment from 'moment'; 
import React from 'react';
import IconButton from '../IconButton'

import useUi from '../../contexts/ui/useUi';


import {
  CastLength,
  Container,
  LastMatch,
  LeftContainer,
  Name,
  RightContainer,
} from './styles';

interface PropTypes {
  itemData: BabaListItem;
  onPress?: (id: string) => void;
}

const BabaListItem: React.FC<PropTypes> = ({
  itemData: { castLength, id, lastGameTimestamp, name },
  onPress,
}) => {
  const { strings, theme } = useUi();

  const getLastMatchDate = (): string =>
    moment.unix(lastGameTimestamp!).format('DD/MM/YYYY');

  return (
    <Container onClick={() => onPress && onPress(id)}>
      <LeftContainer>
        <Name>{name}</Name>
        {lastGameTimestamp && (
          <LastMatch>{`${strings.lastMatch}: ${getLastMatchDate()}`}</LastMatch>
        )}
      </LeftContainer>
      <RightContainer>
        <IconButton size={28} name="groups" color={theme.colors.font} />
        <CastLength>
          {castLength < 10 && 0}
          {castLength}
        </CastLength>
      </RightContainer>
    </Container>
  );
};

export default BabaListItem;
