import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  padding-bottom: 16px;
`;

export const Content = styled.div`
  flex: 1;
  align-items: center;
  max-height: ${window.innerHeight - 90}px;
  overflow-y: scroll;
`;

export const UserImage = styled.img`
  width: 100px;
  height: 100px;
  min-height: 100px;
  border-radius: 100%;
  margin-top: 16px;
`;

export const ChosePhotoButton = styled.div`
  cursor: pointer;
`;

export const ChosePhotoLabel = styled.span`
  color: ${({ theme }) => theme.colors.action};
  font-size: 12px;
`;
