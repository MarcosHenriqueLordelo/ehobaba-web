import React from 'react';
import styled from 'styled-components/native';

const NoDataContainer = styled.View``;

const NoDataLabel = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.font};
`;

const renderNoData = (text: string) => (
  <NoDataContainer>
    <NoDataLabel>{text}</NoDataLabel>
  </NoDataContainer>
);

export default renderNoData;
