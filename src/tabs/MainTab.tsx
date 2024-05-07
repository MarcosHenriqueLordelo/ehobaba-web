import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";

import useUi from "../contexts/ui/useUi";

import Home from "../screens/MainTab/home";
import Profile from "../screens/MainTab/profile";
import Babas from "../screens/MainTab/babas";

import { MdHomeFilled, MdPerson, MdWorkspacesFilled } from "react-icons/md";
import AuthLayout from "../layouts/authLyt";

const MainTab: React.FC = () => {
  const { strings, theme } = useUi();
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState(1);

  const renderScreen = useCallback((): JSX.Element => {
    switch (currentTab) {
      case 0:
        return <Babas onNavigate={handleNavigation} />;
      case 1:
        return <Home onNavigate={handleNavigation} />;
      case 2:
        return <Profile onNavigate={handleNavigation} />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  }, [currentTab]);

  const handleNavigation = (screen: string, params?: any) =>
    navigate(screen, { state: params });

  return (
    <AuthLayout>
      {renderScreen()}
      <NavigationBar
        items={[
          {
            renderIcon: () => (
              <MdWorkspacesFilled size={24} color={theme.colors.font} />
            ),
            label: strings.babas,
          },
          {
            renderIcon: () => (
              <MdHomeFilled size={24} color={theme.colors.font} />
            ),
            label: strings.home,
          },
          {
            renderIcon: () => <MdPerson size={24} color={theme.colors.font} />,
            label: strings.profile,
          },
        ]}
        defaultItem={currentTab}
        onPressItem={setCurrentTab}
      />
    </AuthLayout>
  );
};

export default MainTab;
