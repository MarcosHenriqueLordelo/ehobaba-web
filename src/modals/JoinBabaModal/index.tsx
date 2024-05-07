import React, { useState } from "react";

import useBaba from "../../contexts/baba/useBaba";
import useUi from "../../contexts/ui/useUi";
import useUser from "../../contexts/user/useUser";

import Button from "../../components/Button";
import { ErrorLabel } from "../../components/TextField/styles";

import ModalContainer from "../ModalContainer";

import { ActionsContainer, CodeLabel, Container, Title } from "./styles";
import TextField from "../../components/TextField";

interface PropTypes {
  open?: boolean;
  onClose?: () => void;
  defaultCode?: String;
}

const JoinBabaModal: React.FC<PropTypes> = ({ open, onClose, defaultCode }) => {
  const {
    strings,
    loading,
    setErrors,
    errors: { joinBabaCode },
  } = useUi();
  const { joinBaba } = useUser();
  const { getBabas } = useBaba();

  const [code, setCode] = useState<string>(
    defaultCode
      ? `${defaultCode.substring(0, 3)}-${defaultCode.substring(3, 6)}`
      : ""
  );

  const handleTextChange = (value: string) => {
    let aux = value.replace("-", "");

    if (aux.length > 3) {
      setCode(`${aux.substring(0, 3)}-${aux.substring(3, 6)}`);
    } else setCode(aux);
  };

  const handleErrors = () => {
    const mErrors: Errors = {};

    const trimmedName = code.trim().replace("-", "");

    if (!trimmedName.match("[0-9]+"))
      mErrors.joinBabaCode = {
        message: strings.mustContainOnlyNumbers,
      };

    if (trimmedName.length !== 6)
      mErrors.joinBabaCode = {
        message: strings.codeMustContainSixDigits,
      };

    if (trimmedName.length === 0 || trimmedName === "")
      mErrors.joinBabaCode = {
        message: strings.fieldMustBeFilled,
      };

    setErrors(mErrors);
    return Object.keys(mErrors).length > 0;
  };

  const handleJoin = async () => {
    if (handleErrors()) return;

    const aux = code.replace("-", "");
    if ((await joinBaba(parseInt(aux))) && onClose) {
      onClose();
      getBabas();
    }
  };

  return (
    <ModalContainer open={open}>
      <Container>
        <Title>{strings.joinBaba}</Title>
        <CodeLabel>{strings.insertCode}</CodeLabel>
        <TextField
          value={code}
          placeholder='000-000'
          onChange={handleTextChange}
          maxLength={7}
          id='groupJoinCode'
          label={strings.babaCode}
          type='text'
          modal
        />
        {joinBabaCode && (
          <ErrorLabel>
            {joinBabaCode.message.charAt(0).toUpperCase() +
              joinBabaCode.message.slice(1)}
          </ErrorLabel>
        )}
        <ActionsContainer>
          <Button
            label={strings.cancel}
            transparent
            onClick={onClose}
            disabled={loading}
          />
          <Button
            label={strings.confirm}
            transparent
            labelAction
            loading={loading}
            onClick={handleJoin}
          />
        </ActionsContainer>
      </Container>
    </ModalContainer>
  );
};

export default JoinBabaModal;
