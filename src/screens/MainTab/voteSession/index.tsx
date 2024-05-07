import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";

import {
  ActionsContainer,
  Container,
  Content,
  ImageContainer,
  PlayerName,
  ScrollContainer,
  ScrollView,
} from "./styles";
import { DateLabel } from "../../GameTab/scoreBoard/styles";

import useGame from "../../../contexts/game/useGame";
import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import AppBar from "../../../components/AppBar";
import Loading from "../../../components/Loading";
import Button from "../../../components/Button";
import Slider from "../../../components/Slider";
import Spacer from "../../../components/Spacer";
import MyImage from "../../../components/MyImage";
import AuthLayout from "../../../layouts/authLyt";

type NavParams = {
  Params: { sessionData: PendingRate; reloadGame?: boolean };
};

const VoteSession: React.FC = () => {
  const { user, getPendingRates } = useUser();
  const { strings, loading } = useUi();
  const { getPlayers, players, addRatings, getRatings } = useGame();
  const navigate = useNavigate();
  const {
    state: { sessionData, reloadGame },
  } = useLocation();

  const [availablePlayers, setAvailablePlayers] = useState<Player[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [ratings, setRatings] = useState<VoteSessionRatings>();

  useEffect(() => {
    if (!sessionData) return;

    getPlayers({ babaId: sessionData.babaId, gameId: sessionData.id });
  }, [sessionData]);

  useEffect(() => {
    if (!players) return;
    let aux: VoteSessionRatings = {};
    let auxPlayers = players.filter(
      (player) => player.id !== user!.id && !player.id.includes("guest::")
    );

    auxPlayers.forEach((player) => (aux[player.id] = 0));

    setRatings(aux);
    setAvailablePlayers(auxPlayers);
  }, [players]);

  const handleChange = (value: number) =>
    ratings &&
    availablePlayers &&
    setRatings({
      ...ratings,
      [availablePlayers[currentPlayer].id]: value,
    });

  const handleFinish = async () => {
    if (!ratings) return;

    await addRatings(sessionData.babaId, sessionData.id, ratings);

    getPendingRates();

    if (reloadGame)
      getRatings({ babaId: sessionData.babaId, gameId: sessionData.id });

    navigate(-1);
  };

  return (
    <AuthLayout>
      <Container>
        <ScrollView>
          <AppBar
            title={`${sessionData.location} - ${strings.vote}`}
            onBack={() => navigate(-1)}
          />
          <DateLabel>
            {moment.unix(sessionData.timestamp).format("DD/MM/YYYY")}
          </DateLabel>
          <Content>
            {loading ? (
              <Loading />
            ) : (
              availablePlayers &&
              ratings && (
                <ScrollContainer>
                  <ImageContainer>
                    {availablePlayers[currentPlayer] && (
                      <MyImage
                        size={100}
                        rounded
                        uri={availablePlayers[currentPlayer].photoUrl}
                      />
                    )}
                  </ImageContainer>
                  <PlayerName>
                    {availablePlayers[currentPlayer].name}
                  </PlayerName>
                  <Slider
                    onChange={(value) => handleChange(value)}
                    value={ratings[availablePlayers[currentPlayer].id]}
                    label={strings.performance}
                  />
                  <Spacer height={20} />
                </ScrollContainer>
              )
            )}
          </Content>
          <ActionsContainer center={currentPlayer === 0}>
            {currentPlayer !== 0 && (
              <Button
                label={strings.goBack}
                dark
                onClick={() => setCurrentPlayer(currentPlayer - 1)}
                disabled={loading}
              />
            )}
            <Button
              label={
                currentPlayer < availablePlayers!.length - 1
                  ? strings.goFoward
                  : strings.save
              }
              dark={currentPlayer !== availablePlayers!.length - 1}
              loading={loading}
              onClick={() =>
                currentPlayer < availablePlayers!.length - 1
                  ? setCurrentPlayer(currentPlayer + 1)
                  : handleFinish()
              }
            />
          </ActionsContainer>
        </ScrollView>
      </Container>
    </AuthLayout>
  );
};

export default VoteSession;
