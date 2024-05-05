import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Contexts
import useUi from "./contexts/ui/useUi";

// Pages
import ComponentLibrary from "./screens/ComponentLibrary";
import Login from "./screens/LoginNav/login";

//Tabs
import MainTab from "./tabs/MainTab";

// Components
import Loading from "./components/Loading";

const App: React.FC = () => {
  const { theme, loadingUser } = useUi();

  return (
    <ThemeProvider theme={theme}>
      {loadingUser ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path='/' element={<MainTab />} />
            <Route path='/login' element={<Login />} />
            <Route path='/components' element={<ComponentLibrary />} />
          </Routes>
        </Router>
      )}
    </ThemeProvider>
  );
};

export default App;
