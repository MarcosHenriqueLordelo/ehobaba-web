import React from 'react';
import styled from 'styled-components';

const NoDataContainer = styled.div``;

const NoDataLabel = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.colors.font};
  font-size: 16px;
`;

const renderNoData = (text: string) => (
  <NoDataContainer>
    <NoDataLabel>{text}</NoDataLabel>
  </NoDataContainer>
);

export default renderNoData;
