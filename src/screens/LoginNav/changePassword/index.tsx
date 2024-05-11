import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import {
  Logo,
  Container,
  Content,
  ConditionLabel,
  ConditionsView,
  Label,
} from "./styles";

import Spacer from "../../../components/Spacer";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

import logo from "../../../assets/icon.png";
import AppBar from "../../../components/AppBar";
import {
  hasMinimunLenght,
  hasNoSpaces,
  hasOneDigit,
  hasOneLowerCase,
  hasOneSpecialCharacter,
  hasOneUpperCase,
} from "../../../utils/passwordValidator";
import UnAuthLayout from "../../../layouts/unAuthLyt";

const ChangePassword: React.FC = () => {
  const { changePassword } = useUser();
  const { strings, loading } = useUi();
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    params: { email, code },
  } = state;

  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const isFormFilled = () =>
    hasMinimunLenght(password) &&
    hasNoSpaces(password) &&
    hasOneUpperCase(password) &&
    hasOneLowerCase(password) &&
    hasOneDigit(password) &&
    hasOneSpecialCharacter(password) &&
    password === confPassword;

  const handleChangePassword = async () => {
    if (await changePassword({ email, code: parseInt(code), password }))
      navigate("/");
  };

  const onBack = () => navigate(-1);

  return (
    <UnAuthLayout>
      <Container>
        <AppBar onBack={onBack} title={strings.forgotPassword} />
        <Content>
          <Logo src={logo} />
          <Spacer height={16} />
          <Label>{strings.insertNewPassword}</Label>
          <TextField
            label={strings.password}
            value={password}
            onChange={setPassword}
            type='password'
            id='passwordInput'
          />
          <TextField
            label={strings.confirmPassword}
            value={confPassword}
            onChange={setConfPassword}
            type='password'
            id='confirmPasswordInput'
          />
          <ConditionsView>
            <ConditionLabel
              filled={hasNoSpaces(password) && password.trim().length > 0}
            >
              &bull; {strings.mustHaveNoSpaces}
            </ConditionLabel>
            <ConditionLabel filled={hasOneDigit(password)}>
              &bull; {strings.hasOneDigit}
            </ConditionLabel>
            <ConditionLabel filled={hasMinimunLenght(password)}>
              &bull; {strings.mustHaveMinimunLength}
            </ConditionLabel>
            <ConditionLabel filled={hasOneUpperCase(password)}>
              &bull; {strings.hasOneUpperCase}
            </ConditionLabel>
            <ConditionLabel filled={hasOneLowerCase(password)}>
              &bull; {strings.hasOneLowerCase}
            </ConditionLabel>

            <ConditionLabel filled={hasOneSpecialCharacter(password)}>
              &bull; {strings.hasOneSpecialCharacter}
            </ConditionLabel>
          </ConditionsView>
          <Spacer height={40} />
          <Button
            label={strings.changePassword}
            disabled={loading || !isFormFilled()}
            loading={loading}
            onClick={handleChangePassword}
          />
        </Content>
      </Container>
    </UnAuthLayout>
  );
};

export default ChangePassword;
