import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ChipsContainer = styled.div`
  align-self: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const DateLabel = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
  margin-left: 56px;
  margin-top: -20px;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  flex: 1;
`;

export const ListContainer = styled.div``;

export const CaptureContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CaptureDateLabel = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
  margin-left: 16px;
  margin-top: -20px;
  margin-bottom: 16px;
`;
