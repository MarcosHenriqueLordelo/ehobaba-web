import React, { useState, useEffect } from "react";

import useUi from "../../contexts/ui/useUi";
import useBaba from "../../contexts/baba/useBaba";
import useGame from "../../contexts/game/useGame";

import Button from "../../components/Button";
import PlayerSelectableItem from "../../components/PlayerSelectableItem";

import ModalContainer from "../ModalContainer";

import {
  ActionsContainer,
  Container,
  ErrorLabel,
  ListContainer,
  Title,
} from "./styles";
import TextField from "../../components/TextField";
import { MdAdd } from "react-icons/md";

interface PropTypes {
  open?: boolean;
  onClose?: () => void;
}

const AddPlayerModal: React.FC<PropTypes> = ({ open, onClose }) => {
  const { strings, loading, errors, setErrors, theme } = useUi();
  const { game, addPlayers, players } = useGame();
  const { cast, getCast } = useBaba();

  const [possiblePlayers, setPossiblePlayers] = useState<CastList>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [selectedGuests, setSelectedGuests] = useState<string[]>([]);
  const [guestPlayers, setGuestPlayers] = useState<string[]>([]);
  const [guestName, setGuestName] = useState<string>("");

  useEffect(() => {
    if (!game) return;

    getCast(game.babaId);
  }, [game, getCast]);

  useEffect(() => {
    if (!cast || !players) return;

    const newPossiblePlayers: CastList = [];

    cast.forEach((player) => {
      const aux = players.filter((item) => item.id === player.id);
      if (aux.length === 0) newPossiblePlayers.push(player);
    });

    setPossiblePlayers(newPossiblePlayers);
  }, [cast, players]);

  const handleConfirm = async () => {
    if (!game || !onClose) return;
    setErrors({});

    if (selectedPlayers.length + selectedGuests.length < 1)
      return setErrors({
        addPlayerToGame: { message: strings.mustSelectOnePlayer },
      });

    if (
      await addPlayers(
        {
          babaId: game.babaId,
          gameId: game.id,
          playersList: selectedPlayers,
        },
        selectedGuests
      )
    ) {
      onClose();
      setPossiblePlayers([]);
      setSelectedPlayers([]);
      setGuestPlayers([]);
      setSelectedGuests([]);
    }
  };

  const togglePlayer = (playerId: string) => {
    let aux = [...selectedPlayers];

    if (aux.includes(playerId)) aux = aux.filter((item) => item !== playerId);
    else aux.push(playerId);

    setSelectedPlayers(aux);
  };

  const toggleGuest = (guestId: string) => {
    let aux = [...selectedGuests];

    if (aux.includes(guestId)) aux = aux.filter((item) => item !== guestId);
    else aux.push(guestId);

    setSelectedGuests(aux);
  };

  const addGuest = () => {
    if (guestName === "" || guestName.trim() === "") return;
    setGuestPlayers([...guestPlayers, guestName]);
    setGuestName("");
  };

  return (
    <ModalContainer open={open}>
      <Container>
        <Title>{strings.addPlayer}</Title>
        <TextField
          label={strings.addGuest}
          value={guestName}
          onChange={(value) => setGuestName(value)}
          modal
          action={{
            renderIcon: () => <MdAdd size={24} color={theme.colors.action} />,
            onAction: addGuest,
          }}
          id='addGuestInput'
          type='text'
        />
        <ListContainer>
          {possiblePlayers.map((player) => (
            <PlayerSelectableItem
              player={player}
              selected={selectedPlayers.includes(player.id)}
              key={player.id}
              onPress={() => togglePlayer(player.id)}
            />
          ))}
          {guestPlayers.map((guest, key) => (
            <PlayerSelectableItem
              player={{
                id: `guest${key}`,
                name: guest,
                photoUrl:
                  "https://firebasestorage.googleapis.com/v0/b/ehobaba-559d0.appspot.com/o/Users-Images%2Fuser.jpg?alt=media&token=8d0a0ea4-3dd9-48a2-a5d7-0c184d533677",
              }}
              selected={selectedGuests.includes(guest)}
              key={`guest${key}`}
              onPress={() => toggleGuest(guest)}
            />
          ))}
        </ListContainer>
        {errors.addPlayerToGame && (
          <ErrorLabel>{errors.addPlayerToGame.message}</ErrorLabel>
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
            onClick={handleConfirm}
            disabled={selectedPlayers.length + selectedGuests.length === 0}
          />
        </ActionsContainer>
      </Container>
    </ModalContainer>
  );
};

export default AddPlayerModal;
