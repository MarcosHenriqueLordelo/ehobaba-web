import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Contexts
import useUi from "./contexts/ui/useUi";

// Pages
import CreateAccount from "./screens/LoginNav/createAccount";
import CreateProfile from "./screens/LoginNav/createProfile";
import ChangePassword from "./screens/LoginNav/changePassword";
import ForgotPassword from "./screens/LoginNav/forgotPassword";
import VerifyCode from "./screens/LoginNav/verifyCode";
import ComponentLibrary from "./screens/ComponentLibrary";
import Login from "./screens/LoginNav/login";
import PerformanceEvaluation from "./screens/MainTab/performanceEvaluation";
import VoteSession from "./screens/MainTab/voteSession";
import EditAccount from "./screens/MainTab/editAccount";

//Tabs
import MainTab from "./tabs/MainTab";

// Components
import Loading from "./components/Loading";
import SnackBar from "./components/SnackBar";

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
            <Route
              path='/performanceEvaluation'
              element={<PerformanceEvaluation />}
            />
            <Route path='/verifyCode' element={<VerifyCode />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
            <Route path='/changePassword' element={<ChangePassword />} />
            <Route path='/createProfile' element={<CreateProfile />} />
            <Route path='/createAccount' element={<CreateAccount />} />
            <Route path='/voteSession' element={<VoteSession />} />
            <Route path='/editAccount' element={<EditAccount />} />
          </Routes>
        </Router>
      )}
      <SnackBar position='bottom' />
    </ThemeProvider>
  );
};

export default App;
