import React, { useEffect, useRef, useState } from "react";
import { MdClose, MdLocalFireDepartment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import useUi from "../../contexts/ui/useUi";
import useBaba from "../../contexts/baba/useBaba";
import useUser from "../../contexts/user/useUser";

import ModalContainer from "../ModalContainer";

import PlayerCard from "../../components/PlayerCard";
import { Loader } from "../../components/Loading";
import IconButton from "../../components/IconButton";

import {
  ActionsContainer,
  Container,
  LoaderContainer,
  RowContainer,
} from "./styles";

interface PropTypes {
  open?: boolean;
  onClose?: () => void;
  playerId?: string;
}

const PlayerModal: React.FC<PropTypes> = ({ open, onClose, playerId }) => {
  const { user, setPlayerToBeRatedData, playerToBeRatedData } = useUser();
  const { theme, loading } = useUi();
  const { getPlayerCardInfo } = useBaba();
  const navigate = useNavigate();
  const captureRef = useRef(null);

  const [playerData, setPlayerData] = useState<Info>();
  const [lastId, setLastId] = useState<string>();

  useEffect(() => {
    asyncTask();
  }, [open, playerId, playerToBeRatedData]);

  const asyncTask = async () => {
    if (
      (open && playerId && playerId !== lastId) ||
      (open && playerId && playerId === lastId && !playerToBeRatedData)
    ) {
      const infoData = await getPlayerCardInfo(playerId);

      if (infoData && typeof infoData !== "boolean") {
        setPlayerData(infoData);
        setLastId(playerId);
      }
    }
  };

  const onVote = () => {
    if (playerData && playerId) {
      setPlayerToBeRatedData({ playerData, playerId });
      navigate("/performanceEvaluation");
    }

    if (onClose) onClose();
  };

  return (
    <ModalContainer open={open}>
      <Container>
        <ActionsContainer>
          <IconButton
            renderIcon={() => <MdClose size={24} color={theme.colors.font} />}
            onPress={onClose}
            size={24}
          />
          <RowContainer>
            {playerId !== user?.id && (
              <IconButton
                renderIcon={() => (
                  <MdLocalFireDepartment size={24} color={theme.colors.font} />
                )}
                size={24}
                onPress={onVote}
              />
            )}
          </RowContainer>
        </ActionsContainer>
        {loading && (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
        {playerData && !loading && (
          <PlayerCard captureRef={captureRef} data={playerData} />
        )}
      </Container>
    </ModalContainer>
  );
};

export default PlayerModal;
