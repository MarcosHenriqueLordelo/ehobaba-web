import React, { useState } from "react";

import AppBar from "../../../components/AppBar";
import Loading from "../../../components/Loading";
import Spacer from "../../../components/Spacer";
import CastListItem from "../../../components/CastListItem";

// import BabaCodeModal from '../../../modals/BabaCodeModal';
// import ConfirmModal from '../../../modals/ConfirmModal';

import useBaba from "../../../contexts/baba/useBaba";
import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import { Container, Content } from "./styles";
import { MdPersonAdd } from "react-icons/md";

interface PropTypes {
  onNavigate: (screen: string) => void;
}

const Cast: React.FC<PropTypes> = ({ onNavigate }) => {
  const { baba, cast, removePlayer } = useBaba();
  const { loading, strings, theme } = useUi();
  const { user } = useUser();

  const [babaCodeModal, setBabaCodeModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [playerToBeRemoved, setPlayerToBeRemoved] = useState<string>();

  const handleDeletePressed = (playerId: string) => {
    setPlayerToBeRemoved(playerId);
    setConfirmModal(true);
  };

  const onDeletePlayer = () => {
    if (playerToBeRemoved) {
      removePlayer(playerToBeRemoved);
      setPlayerToBeRemoved(undefined);
    }
  };

  const canDelete = (playerId: string): boolean => {
    if (!baba) return false;
    if (baba?.cast.length < 2) return false;
    if (!baba.cast.includes(user!.id)) return false;
    if (playerId === user?.id) return false;

    if (baba.admins.includes(user!.id)) return true;

    return false;
  };

  return (
    <Container>
      <AppBar
        title={baba?.name}
        onBack={() => onNavigate("back")}
        primaryAction={() => (
          <MdPersonAdd size={24} color={theme.colors.action} />
        )}
        onPrimaryAction={() => setBabaCodeModal(true)}
      />
      {loading ? (
        <Loading />
      ) : (
        <Content>
          {cast &&
            cast.map((player) => (
              <CastListItem
                itemData={player}
                key={player.id}
                onDelete={
                  canDelete(player.id)
                    ? () => handleDeletePressed(player.id)
                    : undefined
                }
              />
            ))}
          <Spacer height={40} />
        </Content>
      )}
      {/* <BabaCodeModal
        open={babaCodeModal}
        onClose={() => setBabaCodeModal(false)}
        code={baba!.code.toString()}
      />
      <ConfirmModal
        onClose={() => setConfirmModal(false)}
        callback={onDeletePlayer}
        message={strings.removePlayerFromBabaMessage}
        open={confirmModal}
        title={strings.removePlayerFromBabaTitle}
      /> */}
    </Container>
  );
};

export default Cast;
