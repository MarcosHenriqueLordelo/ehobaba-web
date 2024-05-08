import React, { useEffect, useRef } from "react";

import AppBar from "../../../components/AppBar";
import PlayerCard from "../../../components/PlayerCard";
import Loading, { Loader } from "../../../components/Loading";

import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import { Container, Content } from "./styles";
import { MdEdit } from "react-icons/md";

interface Proptypes {
  onNavigate: (screen: string) => void;
}

const Profile: React.FC<Proptypes> = ({ onNavigate }) => {
  const { strings, loading, theme } = useUi();
  const { info, getUserInfo } = useUser();
  const captureRef = useRef(null);

  useEffect(() => {
    if (info === undefined) getUserInfo();
  }, []);

  return (
    <Container>
      <AppBar
        title={strings.myProfile}
        secondaryAction={() => <MdEdit size={24} color={theme.colors.action} />}
        onSecondaryAction={() => onNavigate("/editAccount")}
      />
      {loading ? (
        <Content>
          <Loader />
        </Content>
      ) : (
        <Content>
          {info && <PlayerCard data={info} captureRef={captureRef} />}
        </Content>
      )}
    </Container>
  );
};

export default Profile;
