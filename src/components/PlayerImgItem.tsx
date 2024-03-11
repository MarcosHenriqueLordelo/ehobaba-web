import React from 'react';
import styled from 'styled-components/native';
import MyImage from './MyImage';

interface PropTypes {
  data: { id: string; name: string; photoUrl: string };
  onPress?: () => void;
}

const Container = styled.TouchableOpacity`
  align-items: center;
  margin-right: 16px;
`;

const PlayerName = styled.Text`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.font};
  margin-top: 6px;
  width: 60px;
  text-align: center;
`;

const PlayerImgItem: React.FC<PropTypes> = ({ data, onPress }) => {
  return (
    <Container onPress={onPress}>
      <MyImage size={60} rounded uri={data.photoUrl} />
      <PlayerName>{data.name}</PlayerName>
    </Container>
  );
};

export default PlayerImgItem;
