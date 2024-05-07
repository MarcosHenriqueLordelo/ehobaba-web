import React from "react";

import useUi from "../../contexts/ui/useUi";

import Button from "../../components/Button";

import ModalContainer from "../ModalContainer";

import { ActionsContainer, MessageLabel, Container, Title } from "./styles";

interface PropTypes {
  open?: boolean;
  onClose: () => void;
  callback?: () => void;
  message?: string;
  title?: string;
}

const ConfirmModal: React.FC<PropTypes> = ({
  open,
  onClose,
  callback,
  message,
  title,
}) => {
  const { strings, loading } = useUi();

  const onConfirm = () => {
    onClose();
    if (callback) callback();
  };

  return (
    <ModalContainer open={open}>
      <Container>
        <Title>{title}</Title>
        <MessageLabel>{message}</MessageLabel>
        <ActionsContainer>
          <Button
            label={strings.close}
            transparent
            onClick={onClose}
            disabled={loading}
          />
          <Button
            label={strings.confirm}
            transparent
            labelAction
            loading={loading}
            onClick={onConfirm}
          />
        </ActionsContainer>
      </Container>
    </ModalContainer>
  );
};

export default ConfirmModal;
