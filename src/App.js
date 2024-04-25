import React from "react";
import AppBar from "./components/AppBar";
import BabaListItem from "./components/BabaListItem";
import Button from "./components/Button";
import "./utils/globalCss.css";
import CastListItem from "./components/CastListItem";
import { Md10K } from "react-icons/md";

function App() {
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#353941",  overflowX: "hidden", overscrollBehaviorY: "contain" }}
    >
      <AppBar
        title='teste'
        primaryAction={() => <Md10K size={24} color='white' />}
        onPrimaryAction={() => console.log("teste")}
      />
       <BabaListItem 
        itemData={{
          castLength: 5,
          id: "unique_id_1",
          lastGameTimestamp: 1619422557,
          name: "Baba Name 1"
        }}
        onPress={(id) => console.log("Pressed item with ID:", id)}
      />
            <Button 
        label="Click Me" // Example label
        onClick={() => console.log("Button clicked")} // Example onPress handler
      />
          <CastListItem 
        itemData={{
          name: "John Doe", // Example name
          photoUrl: "https://example.com/photo.jpg", // Example photo URL
        }}
        onDelete={() => console.log("Delete button clicked")} // Example onDelete handler
      />
    </div>
  );
}

export default App;
