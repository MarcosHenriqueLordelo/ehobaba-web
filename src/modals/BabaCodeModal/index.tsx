import React from "react";

import useUi from "../../contexts/ui/useUi";

import Button from "../../components/Button";

import ModalContainer from "../ModalContainer";

import { ActionsContainer, Code, CodeLabel, Container, Title } from "./styles";

interface PropTypes {
  open?: boolean;
  onClose?: () => void;
  code: String;
}

const BabaCodeModal: React.FC<PropTypes> = ({ open, onClose, code }) => {
  const { strings, loading } = useUi();

  const handleShare = () => console.log("share");
  // Share.share({
  //   message: `${strings.joinTheBabaCast}${baba?.name.toUpperCase()}\n${
  //     strings.justCopyTheCodeBelow
  //   }\n${code}`,
  // });

  return (
    <ModalContainer open={open}>
      <Container>
        <Title>{strings.babaCode}</Title>
        <CodeLabel>{strings.inviteForCast}</CodeLabel>
        <Code>{code}</Code>
        <ActionsContainer>
          <Button
            label={strings.close}
            transparent
            onClick={onClose}
            disabled={loading}
          />
          <Button
            label={strings.send}
            transparent
            labelAction
            loading={loading}
            onClick={handleShare}
          />
        </ActionsContainer>
      </Container>
    </ModalContainer>
  );
};

export default BabaCodeModal;
