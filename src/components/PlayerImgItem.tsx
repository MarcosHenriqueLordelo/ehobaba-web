import React, { useEffect } from "react";
import styled from "styled-components";
import MyImage from "./MyImage";

interface PropTypes {
  data: { id: string; name: string; photoUrl: string };
  onPress?: () => void;
}

const Container = styled.div`
  align-items: center;
  margin-right: 16px;
`;

const PlayerName = styled.span`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.font};
  margin-top: 6px;
  width: 60px;
  text-align: center;
  font-size: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const PlayerImgItem: React.FC<PropTypes> = ({ data, onPress }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Container onClick={onPress}>
      <MyImage size={60} rounded uri={data.photoUrl} />
      <PlayerName>{data.name}</PlayerName>
    </Container>
  );
};

export default PlayerImgItem;
