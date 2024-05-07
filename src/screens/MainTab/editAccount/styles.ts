import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

export const ScrollView = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  flex: 1;
  align-items: center;
  margin-bottom: 16px;
`;

export const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-top: 16px;
`;

export const ChosePhotoButton = styled.div`
  cursor: pointer;
`;

export const ChosePhotoLabel = styled.span`
  color: ${({ theme }) => theme.colors.action};
  font-size: 12px;
`;
