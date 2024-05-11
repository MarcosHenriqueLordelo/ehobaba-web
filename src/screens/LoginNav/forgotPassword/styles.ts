import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  flex: 1;
  align-items: center;
  padding-top: 70px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 16px;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.font};
  font-size: 16px;
  width: 80%;
  padding-left: 6px;
  margin-bottom: 16px;
`;

export const LinkContainer = styled.div`
  align-self: flex-start;
  margin-left: 11%;
  margin-top: 6px;
  cursor: pointer;
`;

export const HaveACodeLabel = styled.span`
  color: ${({ theme }) => theme.colors.action};
  font-size: 12px;
`;
