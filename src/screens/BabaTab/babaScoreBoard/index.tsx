import React, { useState } from "react";

import AppBar from "../../../components/AppBar";
import Loading from "../../../components/Loading";
import PlayerListItem from "../../../components/PlayerListItem";
import TypeSelectableChip from "../../../components/TypeSelectableChip";

import useUi from "../../../contexts/ui/useUi";
import useBaba from "../../../contexts/baba/useBaba";

import { ChipsContainer, Container, Content } from "./styles";

import AddPlayerModal from "../../../modals/AddPlayerModal";

interface PropTypes {
  onNavigate: (screen: string) => void;
}

const BabaScoreBoard: React.FC<PropTypes> = ({ onNavigate }) => {
  const { loading, strings } = useUi();
  const { baba, scoreBoard } = useBaba();

  const [addPlayerModal, setAddPlayerModal] = useState(false);
  const [selectedType, setSelectedType] = useState<EventType>("gol");

  const getList = (): ScoreBoard => {
    if (!scoreBoard || !selectedType) return [];
    let aux = scoreBoard;

    aux.sort((a, b) => b.score[selectedType] - a.score[selectedType]);

    return aux;
  };

  return (
    <Container>
      <Container>
        <AppBar title={baba?.name} onBack={() => onNavigate("back")} />
        {loading ? (
          <Loading />
        ) : (
          <Content>
            <ChipsContainer>
              <TypeSelectableChip
                selected={selectedType === "gol"}
                label={strings.gol}
                onPress={() => setSelectedType("gol")}
              />
              <TypeSelectableChip
                selected={selectedType === "ass"}
                label={strings.ass}
                onPress={() => setSelectedType("ass")}
              />
              <TypeSelectableChip
                selected={selectedType === "def"}
                label={strings.def}
                onPress={() => setSelectedType("def")}
              />
              <TypeSelectableChip
                selected={selectedType === "fal"}
                label={strings.fal}
                onPress={() => setSelectedType("fal")}
              />
              <TypeSelectableChip
                selected={selectedType === "des"}
                label={strings.des}
                onPress={() => setSelectedType("des")}
              />
            </ChipsContainer>
            {getList().map((player, index) => (
              <PlayerListItem
                itemData={player}
                key={player.id}
                index={index + 1}
              />
            ))}
          </Content>
        )}
        <AddPlayerModal
          onClose={() => setAddPlayerModal(false)}
          open={addPlayerModal}
        />
      </Container>
    </Container>
  );
};

export default BabaScoreBoard;
