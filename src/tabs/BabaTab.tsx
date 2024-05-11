import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdBolt, MdGroups, MdLeaderboard } from "react-icons/md";

import NavigationBar from "../components/NavigationBar";

import useUi from "../contexts/ui/useUi";

import Games from "../screens/BabaTab/games";
import Cast from "../screens/BabaTab/cast";
import BabaScoreBoard from "../screens/BabaTab/babaScoreBoard";

import AuthLayout from "../layouts/authLyt";

const BabaTab: React.FC = () => {
  const { strings, theme } = useUi();
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState(0);

  const renderScreen = useCallback((): JSX.Element => {
    switch (currentTab) {
      case 0:
        return <Games onNavigate={handleNavigation} />;
      case 1:
        return <Cast onNavigate={handleNavigation} />;
      case 2:
        return <BabaScoreBoard onNavigate={handleNavigation} />;
      default:
        return <Games onNavigate={handleNavigation} />;
    }
  }, [currentTab]);

  const handleNavigation = useCallback(
    (screen: string, params?: any) =>
      screen === "back" ? navigate(-1) : navigate(screen, { state: params }),
    []
  );

  return (
    <AuthLayout>
      {renderScreen()}
      <NavigationBar
        items={[
          {
            renderIcon: () => <MdBolt size={24} color={theme.colors.font} />,
            label: strings.games,
          },
          {
            renderIcon: () => <MdGroups size={24} color={theme.colors.font} />,
            label: strings.cast,
          },
          {
            renderIcon: () => (
              <MdLeaderboard size={24} color={theme.colors.font} />
            ),
            label: strings.ranking,
          },
        ]}
        defaultItem={currentTab}
        onPressItem={setCurrentTab}
      />
    </AuthLayout>
  );
};

export default BabaTab;
