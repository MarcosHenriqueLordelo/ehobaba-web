import React, { useState } from "react";

import useUi from "../../contexts/ui/useUi";
import useBaba from "../../contexts/baba/useBaba";
import useGame from "../../contexts/game/useGame";

import Button from "../../components/Button";
import TextField from "../../components/TextField";

import ModalContainer from "../ModalContainer";

import { ActionsContainer, Container, Title } from "./styles";

interface PropTypes {
  open?: boolean;
  onClose?: () => void;
}

const CreateGameModal: React.FC<PropTypes> = ({ open, onClose }) => {
  const { strings, setErrors, loading, errors } = useUi();
  const { createGame } = useGame();
  const { baba } = useBaba();

  const [place, setPlace] = useState<string>("");

  const handleErrors = () => {
    const mErrors: Errors = {};

    const trimmedName = place.trim();
    if (trimmedName.length === 0 || trimmedName === "")
      mErrors.createGamePlace = {
        message: strings.fieldMustBeFilled,
      };

    setErrors(mErrors);
    return Object.keys(mErrors).length > 0;
  };

  const handleCreate = async () => {
    if (handleErrors()) return;

    if (baba) if ((await createGame(baba.id, place)) && onClose) onClose();
  };

  return (
    <ModalContainer open={open}>
      <Container>
        <Title>{strings.createGame}</Title>
        <TextField
          label={strings.place}
          value={place}
          error={errors.createGamePlace?.message}
          onChange={setPlace}
          modal
          id='olaceInput'
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

export default CreateGameModal;
