import React, { useMemo } from 'react';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import IconButton from '../IconButton'

import MyImage from '../MyImage';

import { Container, Content, Name } from './styles';
import useUi from '../../contexts/ui/useUi';
import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'styled-components';

interface PropTypes {
  itemData: CastListItem;
  onDelete?: () => void;
}

const CastListItem: React.FC<PropTypes> = ({
  itemData: { name, photoUrl },
  onDelete,
}) => {
  const { theme } = useUi();

  const styles = useMemo(() => getStyles(theme), [theme]);

  const renderRightAction = () => {
    return (
      <RectButton style={styles.deleteButtonContainer} onPress={onDelete}>
        <IconButton name="delete" size={24} color={theme.colors.font} />
      </RectButton>
    );
  };

  return (
    <Container>
      {!onDelete ? (
        <Content>
          <MyImage size={50} rounded uri={photoUrl} />
          <Name numberOfLines={1}>{name}</Name>
        </Content>
      ) : (
        <Swipeable
          renderRightActions={renderRightAction}
          overshootRight={false}
          containerStyle={styles.swipable}
        >
          <Content>
            <MyImage size={50} rounded uri={photoUrl} />
            <Name numberOfLines={1}>{name}</Name>
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

export default CastListItem;