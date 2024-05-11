import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import { Logo, Container, Content, Label } from "./styles";

import Spacer from "../../../components/Spacer";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

import logo from "../../../assets/icon.png";
import AppBar from "../../../components/AppBar";

import isEmailValid from "../../../utils/isEmailValid";
import UnAuthLayout from "../../../layouts/unAuthLyt";

const VerifyCode: React.FC = () => {
  const { verifyPasswordCode } = useUser();
  const { strings, loading } = useUi();
  const navigate = useNavigate();
  const { state } = useLocation();

  const { email: paramEmail } = state;

  const [formEmail, setEmail] = useState(paramEmail || "");
  const [code, setCode] = useState("");

  const isFormFilled = () =>
    paramEmail
      ? code.length === 6
      : isEmailValid(formEmail) && code.length === 6;

  const onBack = () => navigate(-1);

  const handleSendEmail = async () => {
    if (
      await verifyPasswordCode({
        email: paramEmail || formEmail,
        code: parseInt(code),
      })
    )
      navigate("/changePassword", {
        state: { email: paramEmail || formEmail, code: parseInt(code) },
      });
  };

  return (
    <UnAuthLayout>
      <Container>
        <AppBar onBack={onBack} title={strings.forgotPassword} />
        <Content>
          <Logo src={logo} />
          <Spacer height={60} />
          <Label>
            {paramEmail ? strings.intertCodeSended : strings.insertEmailAndCode}
          </Label>
          {!paramEmail && (
            <TextField
              label={strings.email}
              value={formEmail}
              onChange={setEmail}
              id='emailInput'
              type='email'
            />
          )}
          <TextField
            label={strings.insertCode}
            value={code}
            onChange={setCode}
            type='number'
            id='codeInput'
          />
          <Spacer height={40} />
          <Button
            label={strings.goFoward}
            disabled={loading || !isFormFilled()}
            loading={loading}
            onClick={handleSendEmail}
          />
        </Content>
      </Container>
    </UnAuthLayout>
  );
};

export default VerifyCode;
