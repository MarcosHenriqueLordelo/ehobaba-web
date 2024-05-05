import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginButton from "../../../components/LoginButton";
import Spacer from "../../../components/Spacer";
import TextField from "../../../components/TextField";

import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import {
  AppNameLabel,
  BottomContent,
  Container,
  ForgotPasswordLabel,
  LinkContainer,
  Logo,
  WelcomeLabel,
} from "./styles";

import logo from "../../../assets/icon.png";
import isEmailValid from "../../../utils/isEmailValid";
import UnAuthLayout from "../../../layouts/unAuthLyt";

const Login: React.FC = () => {
  const { strings, setErrors, loading } = useUi();
  const { loginWithEmail } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateToCreateAccount = () => navigate("/createAccount");

  const navigateToForgotPassword = () => navigate("/forgotPassword");

  const onLoginPressed = () => {
    setErrors({});
    if (email.length < 0 || password.length < 0 || !isEmailValid(email))
      return setErrors({
        defaultError: { message: strings.wrongEmailOrPassword },
      });

    loginWithEmail({ email, password });
  };

  return (
    <UnAuthLayout>
      <Container>
        <Logo src={logo} />
        <WelcomeLabel>{strings.welcome}</WelcomeLabel>
        <Spacer height={20} />
        <TextField
          label={strings.email}
          value={email}
          onChange={setEmail}
          id='email'
          type='email'
        />
        <TextField
          label={strings.password}
          value={password}
          onChange={setPassword}
          type='password'
          id='password'
        />
        <LinkContainer onClick={navigateToForgotPassword}>
          <ForgotPasswordLabel>{strings.forgotPassword}</ForgotPasswordLabel>
        </LinkContainer>
        <Spacer height={36} />
        <LoginButton
          type='Email'
          onPress={onLoginPressed}
          loading={loading}
          label={strings.login}
        />
        <Spacer height={10} />
        <LoginButton
          type='Email'
          onPress={navigateToCreateAccount}
          loading={loading}
          label={strings.createProfile}
        />
        <BottomContent>
          <AppNameLabel>{strings.appName}</AppNameLabel>
        </BottomContent>
      </Container>
    </UnAuthLayout>
  );
};

export default Login;
