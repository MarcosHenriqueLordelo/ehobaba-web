import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ActionsContainer,
  Container,
  Content,
  ImageContainer,
  PlayerName,
} from "./styles";

import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import AppBar from "../../../components/AppBar";
import Loading from "../../../components/Loading";
import Button from "../../../components/Button";
import Slider from "../../../components/Slider";
import MyImage from "../../../components/MyImage";

import AuthLayout from "../../../layouts/authLyt";

const PerformanceEvaluation: React.FC = () => {
  const {
    addPerformanceEvaluation,
    playerToBeRatedData,
    setPlayerToBeRatedData,
  } = useUser();
  const { strings, loading } = useUi();
  const navigate = useNavigate();

  const [ratings, setRatings] = useState<Rating>({
    chu: 0,
    dri: 0,
    mar: 0,
    pas: 0,
    rac: 0,
    vel: 0,
  });

  const handleChange = (value: number | readonly number[], type: TypeRating) =>
    setRatings({
      ...ratings,
      [type]: value,
    });

  const handleFinish = async () => {
    if (!playerToBeRatedData) return;

    if (
      await addPerformanceEvaluation({
        ratings,
        targetId: playerToBeRatedData.playerId,
      })
    ) {
      navigate(-1);
      setPlayerToBeRatedData(undefined);
    }
  };

  return (
    <AuthLayout>
      <Container>
        <AppBar
          title={strings.performanceEvaluation}
          onBack={() => navigate(-1)}
        />
        {loading || !playerToBeRatedData ? (
          <Loading />
        ) : (
          <Content>
            <ImageContainer>
              <MyImage
                size={100}
                rounded
                uri={playerToBeRatedData.playerData.photoUrl}
              />
            </ImageContainer>
            <PlayerName>{playerToBeRatedData.playerData.name}</PlayerName>
            <Slider
              onChange={(value) => handleChange(value, "vel")}
              value={ratings.vel}
              label={strings.velocity}
            />
            <Slider
              onChange={(value) => handleChange(value, "chu")}
              value={ratings.chu}
              label={strings.kick}
            />
            <Slider
              onChange={(value) => handleChange(value, "pas")}
              value={ratings.pas}
              label={strings.pass}
            />
            <Slider
              onChange={(value) => handleChange(value, "mar")}
              value={ratings.mar}
              label={strings.marking}
            />
            <Slider
              onChange={(value) => handleChange(value, "dri")}
              value={ratings.dri}
              label={strings.dribble}
            />
            <Slider
              onChange={(value) => handleChange(value, "rac")}
              value={ratings.rac}
              label={strings.guts}
            />
          </Content>
        )}
        <ActionsContainer>
          <Button
            label={strings.cancel}
            dark
            onClick={() => navigate(-1)}
            disabled={loading}
          />
          <Button
            label={strings.save}
            loading={loading}
            onClick={handleFinish}
          />
        </ActionsContainer>
      </Container>
    </AuthLayout>
  );
};

export default PerformanceEvaluation;
