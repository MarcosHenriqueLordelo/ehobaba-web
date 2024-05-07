import React, { useEffect, useState } from "react";
import { MdAdd, MdLogin } from "react-icons/md";

import { Container, ListContainer } from "./styles";

import useUi from "../../../contexts/ui/useUi";
import useBaba from "../../../contexts/baba/useBaba";

import renderNoData from "../../../utils/renderNoData";

import JoinBabaModal from "../../../modals/JoinBabaModal";
import CreateBabaModal from "../../../modals/CreateBabaModal";

import BabaListItem from "../../../components/BabaListItem";
import Loading from "../../../components/Loading";
import AppBar from "../../../components/AppBar";

interface Proptypes {
  onNavigate: (screen: string) => void;
}

const Babas: React.FC<Proptypes> = ({ onNavigate }) => {
  const { strings, setErrors, loading, theme } = useUi();
  const { babas, getBabas, getBaba } = useBaba();

  const [createBaba, setCreateBaba] = useState(false);
  const [joinBaba, setJoinBaba] = useState(false);

  useEffect(() => {
    getBabas();
  }, []);

  const onSelectBaba = (id: string) => {
    onNavigate("/baba");
    getBaba(id);
  };

  return (
    <Container>
      <AppBar
        title={strings.babas}
        primaryAction={() => <MdAdd size={24} color={theme.colors.action} />}
        onPrimaryAction={() => setCreateBaba(true)}
        secondaryAction={() => (
          <MdLogin size={24} color={theme.colors.action} />
        )}
        onSecondaryAction={() => setJoinBaba(true)}
      />
      {loading ? (
        <Loading />
      ) : (
        <ListContainer>
          {babas
            ? babas.map((baba) => (
                <BabaListItem
                  onPress={() => onSelectBaba(baba.id)}
                  itemData={baba}
                  key={baba.id}
                />
              ))
            : renderNoData(strings.noGamesCreated)}
        </ListContainer>
      )}

      <JoinBabaModal open={joinBaba} onClose={() => setJoinBaba(false)} />
      <CreateBabaModal
        open={createBaba}
        onClose={() => {
          setCreateBaba(false);
          setErrors({});
        }}
      />
    </Container>
  );
};

export default Babas;
