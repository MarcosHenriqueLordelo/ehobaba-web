import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { Container } from "./styles";

import useUser from "../contexts/user/useUser";

const AuthLayout: React.FC<PropsWithChildren<DefaultProps>> = ({
  children,
}) => {
  const { user } = useUser();

  if (!user) return <Navigate to='/login' replace />;

  return <Container>{children}</Container>;
};

export default AuthLayout;
