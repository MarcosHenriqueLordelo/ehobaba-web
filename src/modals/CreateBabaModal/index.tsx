import React, { useState } from "react";

import useUi from "../../contexts/ui/useUi";
import useBaba from "../../contexts/baba/useBaba";

import Button from "../../components/Button";
import TextField from "../../components/TextField";

import ModalContainer from "../ModalContainer";

import { ActionsContainer, Container, Title } from "./styles";

interface PropTypes {
  open?: boolean;
  onClose?: () => void;
}

const CreateBabaModal: React.FC<PropTypes> = ({ open, onClose }) => {
  const { strings, setErrors, loading, errors } = useUi();
  const { createBaba, getBabas } = useBaba();

  const [name, setName] = useState<string>("");

  const handleErrors = () => {
    const mErrors: Errors = {};

    const trimmedName = name.trim();
    if (trimmedName.length === 0 || trimmedName === "")
      mErrors.createBabaName = {
        message: strings.fieldMustBeFilled,
      };

    setErrors(mErrors);
    return Object.keys(mErrors).length > 0;
  };

  const handleCreate = async () => {
    if (handleErrors()) return;

    if ((await createBaba(name)) && onClose) {
      onClose();
      getBabas();
    }
  };

  return (
    <ModalContainer open={open}>
      <Container>
        <Title>{strings.createBaba}</Title>
        <TextField
          label={strings.name}
          value={name}
          error={errors.createBabaName?.message}
          onChange={setName}
          modal
          id='babaname'
          type='text'
        />
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
            onClick={handleCreate}
          />
        </ActionsContainer>
      </Container>
    </ModalContainer>
  );
};

export default CreateBabaModal;
