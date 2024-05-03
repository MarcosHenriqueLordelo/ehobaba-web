import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  margin-bottom: 10px;
  width: 90%;
  align-items: center;
`;

export const LeftContainer = styled.div`
  flex: 1;
  padding: 8px 16px;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
`;

export const DeleteContainer = styled.div`
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;
