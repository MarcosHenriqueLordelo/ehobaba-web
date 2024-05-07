import React, { useState } from "react";

import CreateGameModal from '../../../modals/CreateGameModal';

import AppBar from "../../../components/AppBar";
import GameListItem from "../../../components/GameListItem";
import Loading from "../../../components/Loading";
import Spacer from "../../../components/Spacer";

import useBaba from "../../../contexts/baba/useBaba";
import useGame from "../../../contexts/game/useGame";
import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import { Container, ListContainer } from "./styles";
import { MdAdd } from "react-icons/md";

interface PropTypes {
  onNavigate: (screen: string) => void;
}

const Games: React.FC<PropTypes> = ({ onNavigate }) => {
  const { baba, games } = useBaba();
  const { loading, setErrors, theme } = useUi();
  const { user } = useUser();
  const { getGame } = useGame();

  const [createGame, setCreateGame] = useState(false);

  return (
    <Container>
      <AppBar
        title={baba?.name}
        onBack={() => onNavigate("back")}
        primaryAction={
          baba?.admins.includes(user!.id)
            ? () => <MdAdd size={24} color={theme.colors.action} />
            : undefined
        }
        onPrimaryAction={() => setCreateGame(true)}
      />
      {loading ? (
        <Loading />
      ) : (
        <ListContainer>
          {games.map((game) => (
            <GameListItem
              itemData={{ ...game, babaId: baba!.id }}
              key={game.id}
              onPress={() => {
                getGame({ babaId: baba!.id, gameId: game.id });
                onNavigate("/gameTab");
              }}
            />
          ))}
          <Spacer height={20} />
        </ListContainer>
      )}
      <CreateGameModal
        open={createGame}
        onClose={() => {
          setCreateGame(false);
          setErrors({});
        }}
      />
    </Container>
  );
};

export default Games;
