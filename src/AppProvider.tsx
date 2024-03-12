import React from "react";

import { BabaProvider } from "./contexts/baba";
import { GameProvider } from "./contexts/game";

import { UiProvider } from "./contexts/ui";
import { UserProvider } from "./contexts/user";

const AppProvider: React.FC<DefaultProps> = ({ children }) => (
  <UiProvider>
    <UserProvider>
      <BabaProvider>
        <GameProvider>{children}</GameProvider>
      </BabaProvider>
    </UserProvider>
  </UiProvider>
);

export default AppProvider;
