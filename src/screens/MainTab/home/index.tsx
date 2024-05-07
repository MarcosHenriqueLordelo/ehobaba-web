import React, { useEffect, useState } from "react";

import useUi from "../../../contexts/ui/useUi";
import useBaba from "../../../contexts/baba/useBaba";
import useUser from "../../../contexts/user/useUser";

import { Container, HorizontalScroll, SectionLabel } from "./styles";

import GameItemCard from "../../../components/GameItemCard";
import Spacer from "../../../components/Spacer";
import PlayerImgItem from "../../../components/PlayerImgItem";
import PendingRateCard from "../../../components/PendingRateCard";
import AppBar from "../../../components/AppBar";

import PlayerModal from "../../../modals/PlayerModal";

import renderNoData from "../../../utils/renderNoData";
import useGame from "../../../contexts/game/useGame";
import { MdRefresh } from "react-icons/md";

interface Proptypes {
  onNavigate: (screen: string, params?: any) => void;
}

const Home: React.FC<Proptypes> = ({ onNavigate }) => {
  const { strings } = useUi();
  const { lastGamePlayers, getLastGames, getLastGamePlayers, lastGames } =
    useBaba();
  const { getGame } = useGame();
  const { pendingRates, getPendingRates, user } = useUser();
  const { theme } = useUi();

  const [selectedPlayer, setSelectedPlayer] = useState<string>();

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    getLastGames();
    getLastGamePlayers();
    getPendingRates();
  };

  const handleGamePressed = (gameId: string, babaId: string) => {
    getGame({ gameId, babaId });
    onNavigate("GameTab");
  };

  return (
    <Container>
      <AppBar
        title={`${strings.welcome} ${user!.name.split(" ")[0]}`}
        primaryAction={() => (
          <MdRefresh size={24} color={theme.colors.action} />
        )}
        onPrimaryAction={refresh}
      />
      <div>
        <Spacer height={16} />
        <SectionLabel>{strings.lastMatches}</SectionLabel>
        <Spacer height={16} />
        {lastGames ? (
          <HorizontalScroll>
            {lastGames.map((game) => (
              <GameItemCard
                cardData={game}
                key={game.id}
                onPress={() => handleGamePressed(game.id, game.babaId)}
              />
            ))}
            <Spacer width={16} />
          </HorizontalScroll>
        ) : (
          renderNoData(strings.notPlayedAnyMatchYet)
        )}
        <Spacer height={30} />
        <SectionLabel>{strings.playedRecently}</SectionLabel>
        <Spacer height={22} />
        {lastGamePlayers ? (
          <HorizontalScroll>
            {lastGamePlayers.map((player) => (
              <PlayerImgItem
                data={player}
                key={player.id}
                onPress={() => setSelectedPlayer(player.id)}
              />
            ))}
            <Spacer width={16} />
          </HorizontalScroll>
        ) : (
          renderNoData(strings.notPlayedAnyMatchYet)
        )}
        <Spacer height={30} />
        <SectionLabel>{strings.pendingRatings}</SectionLabel>
        <Spacer height={22} />
        {pendingRates
          ? pendingRates.map((game) => (
              <PendingRateCard
                cardData={game}
                key={game.id}
                onPress={() => onNavigate("VoteSession", { sessionData: game })}
              />
            ))
          : renderNoData(strings.noPendingRates)}
        <Spacer height={22} />
      </div>

      <PlayerModal
        open={selectedPlayer !== undefined}
        onClose={() => setSelectedPlayer(undefined)}
        playerId={selectedPlayer}
      />
    </Container>
  );
};

export default Home;
