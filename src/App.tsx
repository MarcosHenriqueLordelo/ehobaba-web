import React, { useRef } from "react";
import AppBar from "./components/AppBar";
import BabaListItem from "./components/BabaListItem";
import Button from "./components/Button";
import "./utils/globalCss.css";
import CastListItem from "./components/CastListItem";
import { Md10K } from "react-icons/md";
import EventListItem from "./components/EventListItem";
import GameItemCard from "./components/GameItemCard";
import GameListItem from "./components/GameListItem";
import LoginButton from "./components/LoginButton";
import MyImage from "./components/MyImage";
import NavigationBar from "./components/NavigationBar";
import { MdArrowBack } from "react-icons/md";
import PendingRateCard from "./components/PendingRateCard";
import PlayerCard from "./components/PlayerCard";
import PlayerListItem from "./components/PlayerListItem";
import PlayerSelectableItem from "./components/PlayerSelectableItem";
import Rating from "./components/Rating";
import RatingListItem from "./components/RatingListItem";
import Score from "./components/Score";
import Select from "./components/Select";
import Slider from "./components/Slider";
import SnackBar from "./components/SnackBar";
import TextField from "./components/TextField";

function App() {
  const ref = useRef(null);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#353941",
        overflowX: "hidden",
        overscrollBehaviorY: "contain",
        padding: 16,
      }}
    >
      <AppBar
        title='teste'
        primaryAction={() => <Md10K size={24} color='white' />}
        onPrimaryAction={() => console.log("teste")}
      />
      <div style={{ height: 10 }} />
      <BabaListItem
        itemData={{
          castLength: 5,
          id: "unique_id_1",
          lastGameTimestamp: 1619422557,
          name: "Baba Name 1",
        }}
        onPress={(id) => console.log("Pressed item with ID:", id)}
      />
      <div style={{ height: 10 }} />
      <Button
        label='Click Me' // Example label
        onClick={() => console.log("Button clicked")} // Example onPress handler
      />
      <div style={{ height: 10 }} />
      <CastListItem
        itemData={{
          id: "asdasd",
          name: "John Doe", // Example name
          photoUrl: "https://example.com/photo.jpg", // Example photo URL
        }}
        onDelete={() => console.log("Delete button clicked")} // Example onDelete handler
      />
      <div style={{ height: 10 }} />
      <EventListItem
        itemData={{
          id: "asdasd",
          playerId: "asdasdasd",
          playerName: "Player Name",
          timestamp: 1714084579,
          type: "des",
        }}
      />
      <div style={{ height: 10 }} />
      <GameItemCard
        cardData={{
          id: "",
          location: "Salvador",
          timestamp: 1714084579,
        }}
      />
      <div style={{ height: 10 }} />
      <GameListItem
        itemData={{
          babaId: "asdasd",
          id: "asdasd",
          location: "Lugar",
          timestamp: 1714084579,
        }}
      />
      <div style={{ height: 10 }} />
      <LoginButton label='Login' type='Email' />
      <div style={{ height: 10 }} />
      <MyImage
        size={24}
        uri='https://firebasestorage.googleapis.com/v0/b/ehobaba-559d0.appspot.com/o/Users-Images%2F3xU5SFTVeDQiAjfmq6mOemAw8kh2%2F104569468409-profile.jpg?alt=media'
        rounded
      />
      <div style={{ height: 10 }} />
      <NavigationBar
        items={[
          { label: "Aba 1", renderIcon: () => <MdArrowBack /> },
          { label: "Aba 2", renderIcon: () => <MdArrowBack /> },
          { label: "Aba 3", renderIcon: () => <MdArrowBack /> },
        ]}
        defaultItem={0}
      />
      <div style={{ height: 10 }} />
      <PendingRateCard
        cardData={{
          babaId: "asdasd",
          id: "asdasd",
          location: "Lugar",
          timestamp: 1714084579,
        }}
      />
      <div style={{ height: 10 }} />
      <PlayerCard
        captureRef={ref}
        data={{
          avarage: 14,
          bornDay: "16/11/1999",
          country: "BRA",
          games: 14,
          name: "Marcos Marques",
          photoUrl:
            "https://firebasestorage.googleapis.com/v0/b/ehobaba-559d0.appspot.com/o/Users-Images%2F3xU5SFTVeDQiAjfmq6mOemAw8kh2%2F104569468409-profile.jpg?alt=media",
          position: "ATK",
          rating: { chu: 77, dri: 11, mar: 44, pas: 55, rac: 44, vel: 44 },
          score: { ass: 10, def: 14, des: 14, fal: 14, gol: 54 },
        }}
      />
      <div style={{ height: 10 }} />
      <PlayerListItem
        itemData={{
          id: "asdasd",
          name: "Marcos Marques",
          score: { ass: 10, def: 14, des: 14, fal: 14, gol: 54 },
        }}
        index={1}
      />
      <div style={{ height: 10 }} />
      <PlayerSelectableItem
        player={{
          id: "123123",
          name: "Marcos Marques",
          photoUrl:
            "https://firebasestorage.googleapis.com/v0/b/ehobaba-559d0.appspot.com/o/Users-Images%2F3xU5SFTVeDQiAjfmq6mOemAw8kh2%2F104569468409-profile.jpg?alt=media",
        }}
      />
      <div style={{ height: 10 }} />
      <Rating
        rating={{ chu: 77, dri: 11, mar: 44, pas: 55, rac: 44, vel: 44 }}
      />
      <div style={{ height: 10 }} />
      <RatingListItem
        index={0}
        itemData={{
          avarage: 77,
          playerId: "asdasd",
          playerName: "asdasd",
          playerPhoto:
            "https://firebasestorage.googleapis.com/v0/b/ehobaba-559d0.appspot.com/o/Users-Images%2F3xU5SFTVeDQiAjfmq6mOemAw8kh2%2F104569468409-profile.jpg?alt=media",
        }}
      />
      <div style={{ height: 10 }} />
      <Score score={{ ass: 10, def: 14, des: 14, fal: 14, gol: 54 }} />
      <div style={{ height: 10 }} />
      <Select
        data={[
          { label: "LAbel", value: 0 },
          { label: "Label 2", value: 2 },
        ]}
        onChange={(value) => console.log(value)}
        value={0}
      />
      <div style={{ height: 10 }} />
      <Slider
        value={50}
        onChange={(value) => console.log(value)}
        min={0}
        max={99}
        label='label slider'
      />
      <div style={{ height: 10 }} />
      <SnackBar position='bottom' />
      <div style={{ height: 10 }} />
      <TextField label='TextFieldLabel' value='value' />
    </div>
  );
}

export default App;
