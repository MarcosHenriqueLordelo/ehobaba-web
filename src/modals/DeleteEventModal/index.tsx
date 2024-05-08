import React from 'react';

import useUi from '../../contexts/ui/useUi';

import Button from '../../components/Button';

import ModalContainer from '../ModalContainer';

import { ActionsContainer, MessageLabel, Container, Title } from './styles';

interface PropTypes {
  open?: boolean;
  onClose?: () => void;
  onConfirmDelete?: () => void;
}

const DeleteEventModal: React.FC<PropTypes> = ({
  open,
  onClose,
  onConfirmDelete,
}) => {
  const { strings, loading } = useUi();

  return (
    <ModalContainer open={open} >
      <Container>
        <Title>{strings.deleteEvent}</Title>
        <MessageLabel>{strings.deleteEventAux}</MessageLabel>
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
            onClick={onConfirmDelete}
          />
        </ActionsContainer>
      </Container>
    </ModalContainer>
  );
};

export default DeleteEventModal;
