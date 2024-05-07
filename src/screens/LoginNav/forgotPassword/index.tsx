import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import {
  Logo,
  Container,
  Content,
  Label,
  LinkContainer,
  HaveACodeLabel,
  ScrollView,
} from "./styles";

import Spacer from "../../../components/Spacer";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

import logo from "../../../assets/icon.png";
import AppBar from "../../../components/AppBar";

import isEmailValid from "../../../utils/isEmailValid";
import UnAuthLayout from "../../../layouts/unAuthLyt";

const ForgotPassword: React.FC = () => {
  const { sendEmailPassword } = useUser();
  const { strings, loading, setErrors, errors } = useUi();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const isFormFilled = () => isEmailValid(email);

  const onBack = () => navigate(-1);

  const handleSendEmail = async () => {
    setErrors({});
    if (!isEmailValid(email)) {
      setErrors({ sendEmailPassword: { message: strings.invalidEmail } });
      return;
    } else if (await sendEmailPassword({ email }))
      navigate("/verifyCode", { state: { email } });
  };

  const onHaveACode = () => {
    navigate("/verifyCode", { state: {} });
  };

  return (
    <UnAuthLayout>
      <Container>
        <ScrollView>
          <AppBar onBack={onBack} title={strings.forgotPassword} />
          <Content>
            <Logo src={logo} />
            <Spacer height={60} />
            <Label>{strings.fillEmail}</Label>
            <TextField
              label={strings.email}
              value={email}
              onChange={setEmail}
              error={errors.sendEmailPassword?.message}
              id='emailInput'
              type='email'
            />
            <LinkContainer onClick={onHaveACode}>
              <HaveACodeLabel>{strings.haveACode}</HaveACodeLabel>
            </LinkContainer>
            <Spacer height={40} />
            <Button
              label={strings.sendEmail}
              disabled={loading || !isFormFilled()}
              loading={loading}
              onClick={handleSendEmail}
            />
          </Content>
        </ScrollView>
      </Container>
    </UnAuthLayout>
  );
};

export default ForgotPassword;
