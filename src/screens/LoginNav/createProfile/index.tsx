import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import {
  Logo,
  Container,
  Content,
  ConditionLabel,
  ConditionsView,
  ScrollView,
} from "./styles";

import Spacer from "../../../components/Spacer";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

import logo from "../../../assets/icon.png";
import AppBar from "../../../components/AppBar";
import isEmailValid from "../../../utils/isEmailValid";
import {
  hasMinimunLenght,
  hasNoSpaces,
  hasOneDigit,
  hasOneLowerCase,
  hasOneSpecialCharacter,
  hasOneUpperCase,
} from "../../../utils/passwordValidator";

const CreateProfile: React.FC = () => {
  const { createAccount } = useUser();
  const { strings, loading, setErrors } = useUi();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const isFormFilled = () =>
    isEmailValid(email) &&
    hasMinimunLenght(password) &&
    hasNoSpaces(password) &&
    hasOneUpperCase(password) &&
    hasOneLowerCase(password) &&
    hasOneDigit(password) &&
    hasOneSpecialCharacter(password);

  const handleCreateUserData = async () => {
    setErrors({});
    if (password !== confPassword)
      return setErrors({
        defaultError: { message: strings.passwordsMustMatch },
      });
    const res = await createAccount({ email, password });

    if (res) {
      onBack();
      setEmail("");
      setPassword("");
      setConfPassword("");
    }
  };

  const onBack = () => navigate(-1);

  return (
    <Container>
      <ScrollView>
        <AppBar onBack={onBack} title={strings.createProfile} />
        <Content>
          <Logo src={logo} />
          <Spacer height={16} />
          <TextField
            label={strings.email}
            value={email}
            onChange={setEmail}
            type='email'
            id='emailInput'
          />
          <TextField
            label={strings.password}
            value={password}
            onChange={setPassword}
            type='password'
            id='passwordinput'
          />
          <TextField
            label={strings.confirmPassword}
            value={confPassword}
            onChange={setConfPassword}
            type='password'
            id='confirmPasswordinput'
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
            label={strings.createProfile}
            disabled={loading || !isFormFilled()}
            loading={loading}
            onClick={handleCreateUserData}
          />
        </Content>
      </ScrollView>
    </Container>
  );
};

export default CreateProfile;
