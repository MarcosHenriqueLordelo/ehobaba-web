import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.section};
  border-radius: 12px;
  margin-bottom: 10px;
  width: 90%;
  align-self: center;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 17px;
  font-weight: bold;
  max-height: calc(1.2em * 1);
  text-transform: capitalize;
  margin-left: 16px;
  flex: 1;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 100%;
  overflow: hidden;
`;

export const Content = styled.div`
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: 8px 16px;
`;
