import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { Container } from "./styles";

import useUser from "../contexts/user/useUser";

const UnAuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { user } = useUser();

  if (user) return <Navigate to='/' replace />;

  return <Container>{children}</Container>;
};

export default UnAuthLayout;
