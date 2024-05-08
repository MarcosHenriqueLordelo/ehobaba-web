import React, { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLeaderboard, MdSports, MdThumbsUpDown } from "react-icons/md";

import NavigationBar from "../components/NavigationBar";

import useUi from "../contexts/ui/useUi";

import Events from "../screens/GameTab/events";
import ScoreBoard from "../screens/GameTab/scoreBoard";
import RatingBoard from "../screens/GameTab/ratingBoard";

import AuthLayout from "../layouts/authLyt";

const GameTab: React.FC = () => {
  const { strings, theme } = useUi();
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState(1);

  const renderScreen = useCallback((): JSX.Element => {
    switch (currentTab) {
      case 0:
        return <Events onNavigate={handleNavigation} />;
      case 1:
        return renderScoreBoard;
      case 2:
        return <RatingBoard onNavigate={handleNavigation} />;
      default:
        return <Events onNavigate={handleNavigation} />;
    }
  }, [currentTab]);

  const handleNavigation = (screen: string, params?: any) =>
    screen === "back" ? navigate(-1) : navigate(screen, { state: params });

  const renderScoreBoard = useMemo(
    () => <ScoreBoard onNavigate={handleNavigation} />,
    []
  );

  return (
    <AuthLayout>
      {renderScreen()}
      <NavigationBar
        items={[
          {
            renderIcon: () => <MdSports size={24} color={theme.colors.font} />,
            label: strings.events,
          },
          {
            renderIcon: () => (
              <MdLeaderboard size={24} color={theme.colors.font} />
            ),
            label: strings.score,
          },
          {
            renderIcon: () => (
              <MdThumbsUpDown size={24} color={theme.colors.font} />
            ),
            label: strings.vote,
          },
        ]}
        defaultItem={currentTab}
        onPressItem={setCurrentTab}
      />
    </AuthLayout>
  );
};

export default GameTab;
