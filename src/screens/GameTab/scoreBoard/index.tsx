import React, { useState } from "react";

import AppBar from "../../../components/AppBar";
import Loading from "../../../components/Loading";
import PlayerListItem from "../../../components/PlayerListItem";
import TypeSelectableChip from "../../../components/TypeSelectableChip";
import moment from "moment";

import useGame from "../../../contexts/game/useGame";
import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import { ChipsContainer, Container, Content, DateLabel } from "./styles";

import AddPlayerModal from "../../../modals/AddPlayerModal";
import ConfirmModal from "../../../modals/ConfirmModal";
import { MdPersonAdd } from "react-icons/md";

interface PropTypes {
  onNavigate: (screen: string) => void;
}

const ScoreBoard: React.FC<PropTypes> = ({ onNavigate }) => {
  const { game, players, removePlayerFromGame } = useGame();
  const { user } = useUser();
  const { loading, strings, theme } = useUi();

  const [addPlayerModal, setAddPlayerModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [selectedType, setSelectedType] = useState<EventType>("gol");
  const [playerToBeRemoved, setPlayerToBeRemoved] = useState<string>();

  const isAdmin = (): boolean =>
    game ? game.admins.includes(user!.id) : false;

  const getList = (): ScoreBoard => {
    if (!players || !selectedType) return [];
    let aux = players;

    aux.sort((a, b) => b.score[selectedType] - a.score[selectedType]);

    return aux;
  };

  const canDelete = (): boolean => {
    if (!game) return false;
    if (!user) return false;

    if (game.admins.includes(user.id)) return true;

    return false;
  };

  const onDeletePlayer = () => {
    if (playerToBeRemoved) {
      removePlayerFromGame(playerToBeRemoved);
      setPlayerToBeRemoved(undefined);
    }
  };

  const handleDeletePressed = (playerId: string) => {
    setPlayerToBeRemoved(playerId);
    setConfirmModal(true);
  };

  return (
    <Container>
      <AppBar
        title={game?.location}
        onBack={() => onNavigate("back")}
        primaryAction={
          isAdmin()
            ? () => <MdPersonAdd size={24} color={theme.colors.action} />
            : undefined
        }
        onPrimaryAction={() => setAddPlayerModal(true)}
      />
      {game && (
        <DateLabel>
          {moment.unix(game.timestamp).format("DD/MM/YYYY")}
        </DateLabel>
      )}
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <ChipsContainer>
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
          </ChipsContainer>
          {getList().map((player, index) => (
            <PlayerListItem
              itemData={player}
              key={player.id}
              index={index + 1}
              onDelete={
                canDelete() ? () => handleDeletePressed(player.id) : undefined
              }
            />
          ))}
        </Content>
      )}
      <AddPlayerModal
        onClose={() => setAddPlayerModal(false)}
        open={addPlayerModal}
      />
      <ConfirmModal
        onClose={() => setConfirmModal(false)}
        callback={onDeletePlayer}
        message={strings.removePlayerFromGameMessage}
        open={confirmModal}
        title={strings.removePlayerFromGameTitle}
      />
    </Container>
  );
};

export default ScoreBoard;
