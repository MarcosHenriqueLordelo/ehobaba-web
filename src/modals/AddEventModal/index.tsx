import React, { useState } from "react";

import useUi from "../../contexts/ui/useUi";
import useGame from "../../contexts/game/useGame";

import Button from "../../components/Button";
import TouchableImgItem from "../../components/TouchableImgItem";
import TypeSelectableChip from "../../components/TypeSelectableChip";

import ModalContainer from "../ModalContainer";

import {
  ActionsContainer,
  Container,
  ErrorLabel,
  ListContainer,
  PlayerLabel,
  Title,
} from "./styles";

interface PropTypes {
  open?: boolean;
  onClose?: () => void;
}

const AddEventModal: React.FC<PropTypes> = ({ open, onClose }) => {
  const { strings, loading, errors, setErrors } = useUi();
  const { game, addEvent, players } = useGame();

  const [selectedType, setSelectedType] = useState<EventType>("gol");
  const [selectedPlayerName, setSelectedPlayerName] = useState<string>();
  const [selectedPlayer, setSelectedPlayer] = useState<string>();

  const handleConfirm = async () => {
    setErrors({});

    if (!selectedPlayer)
      return setErrors({
        addEvent: { message: strings.mustSelectOnePlayer },
      });

    if (!selectedType)
      return setErrors({
        addEvent: { message: strings.mustSelectOneEventType },
      });

    if (game)
      if (
        (await addEvent({
          babaId: game.babaId,
          gameId: game.id,
          playerId: selectedPlayer,
          type: selectedType,
        })) &&
        onClose
      ) {
        setSelectedPlayer(undefined);
        setSelectedPlayerName(undefined);
        setSelectedType("gol");
        onClose();
      }
  };

  const handleClose = () => {
    if (!onClose) return;
    setSelectedPlayer(undefined);
    setSelectedPlayerName(undefined);
    setSelectedType("gol");
    onClose();
  };

  return (
    <ModalContainer open={open}>
      <Container>
        <Title>{strings.addEvent}</Title>
        <ListContainer>
          <TypeSelectableChip
            selected={selectedType === "gol"}
            label={strings.gol}
            onPress={() => setSelectedType("gol")}
          />
          <TypeSelectableChip
            selected={selectedType === "ass"}
            label={strings.ass}
            onPress={() => setSelectedType("ass")}
          />
          <TypeSelectableChip
            selected={selectedType === "def"}
            label={strings.def}
            onPress={() => setSelectedType("def")}
          />
          <TypeSelectableChip
            selected={selectedType === "fal"}
            label={strings.fal}
            onPress={() => setSelectedType("fal")}
          />
          <TypeSelectableChip
            selected={selectedType === "des"}
            label={strings.des}
            onPress={() => setSelectedType("des")}
          />
        </ListContainer>
        <PlayerLabel>{selectedPlayerName || strings.selectPlayer}</PlayerLabel>
        <ListContainer>
          {players!.map((player) => (
            <TouchableImgItem
              player={player}
              selected={selectedPlayer === player.id}
              key={player.id}
              onPress={() => {
                if (selectedPlayer === player.id) {
                  setSelectedPlayer(undefined);
                  setSelectedPlayerName(undefined);
                } else {
                  setSelectedPlayer(player.id);
                  setSelectedPlayerName(player.name);
                }
              }}
            />
          ))}
        </ListContainer>
        {errors.addEvent && <ErrorLabel>{errors.addEvent.message}</ErrorLabel>}
        <ActionsContainer>
          <Button
            label={strings.cancel}
            transparent
            onClick={handleClose}
            disabled={loading}
          />
          <Button
            label={strings.confirm}
            transparent
            labelAction
            loading={loading}
            onClick={handleConfirm}
            disabled={
              selectedPlayer === undefined || selectedType === undefined
            }
          />
        </ActionsContainer>
      </Container>
    </ModalContainer>
  );
};

export default AddEventModal;
