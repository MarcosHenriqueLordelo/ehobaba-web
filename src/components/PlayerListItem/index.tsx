import React, { useMemo } from 'react';
import { DefaultTheme } from 'styled-components';
import { StyleSheet } from 'react-native';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

import {
  Container,
  Content,
  LeftContainer,
  Name,
  PositionLabel,
} from './styles';

import Score from '../Score';

import useUi from '../../contexts/ui/useUi';

interface PropTypes {
  itemData: ScoreBoardItem;
  index: number;
  onDelete?: () => void;
}

const PlayerListItem: React.FC<PropTypes> = ({
  itemData: { name, score },
  index,
  onDelete,
}) => {
  const { theme } = useUi();

  const styles = useMemo(() => getStyles(theme), [theme]);

  const renderRightAction = () => {
    return (
      <RectButton style={styles.deleteButtonContainer} onPress={onDelete}>
        <MaterialIcon name="delete" size={24} color={theme.colors.font} />
      </RectButton>
    );
  };

  return (
    <Container>
      {!onDelete ? (
        <Content>
          <LeftContainer>
            <Name>{name}</Name> //TODO: passar para dentro do estilo o número de linhas DONE
            <Score score={score} />
          </LeftContainer>
          <PositionLabel>{`#${index < 10 && '0'}${index}`}</PositionLabel>
        </Content>
      ) : (
        <Swipeable
          renderRightActions={renderRightAction}
          overshootRight={false}
          containerStyle={styles.swipable}
        >
          <Content>
            <LeftContainer>
              <Name>{name}</Name>
              <Score score={score} />
            </LeftContainer>
            <PositionLabel>{`#${index < 10 && '0'}${index}`}</PositionLabel>
          </Content>
        </Swipeable>
      )}
    </Container>
  );
};

const getStyles = (theme: DefaultTheme) =>
  StyleSheet.create({
    swipable: {
      borderRadius: 12,
    },
    deleteButtonContainer: {
      backgroundColor: theme.colors.error,
      width: 60,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default PlayerListItem;
