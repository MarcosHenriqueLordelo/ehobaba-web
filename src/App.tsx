import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Contexts
import useUi from "./contexts/ui/useUi";

// Pages
import Home from "./screens/Home";

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
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      )}
    </ThemeProvider>
  );
};

export default App;
