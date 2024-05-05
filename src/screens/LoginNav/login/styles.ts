import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  align-items: center;
  min-height: 100vh;
`;

export const BottomContent = styled.div`
  flex: 1;
  justify-content: flex-end;
  padding: 16px 0px;
  align-items: center;
`;

export const WelcomeLabel = styled.span`
  color: ${({ theme }) => theme.colors.font};
  text-transform: capitalize;
  font-size: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 80px;
`;

export const AppNameLabel = styled.span`
  color: ${({ theme }) => theme.colors.action};
  font-size: 22px;
  font-weight: bold;
  margin-top: 6px;
`;

export const LinkContainer = styled.div`
  align-self: flex-start;
  margin-left: 11%;
`;

export const ForgotPasswordLabel = styled.span`
  color: ${({ theme }) => theme.colors.action};
  font-size: 12px;
`;
