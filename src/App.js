import React from "react";
import AppBar from "./components/AppBar";
import "./utils/globalCss.css";

import { Md10K } from "react-icons/md";

function App() {
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#353941" }}
    >
      <AppBar
        title='teste'
        primaryAction={() => <Md10K size={24} color='white' />}
        onPrimaryAction={() => console.log("teste")}
      />
    </div>
  );
}

export default App;
