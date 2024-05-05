import React, { useCallback, useEffect, useRef } from "react";

import AppBar from "../../../components/AppBar";
import PlayerCard from "../../../components/PlayerCard";
import Loading from "../../../components/Loading";

import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import { Container, Content } from "./styles";
import { MdEdit, MdShare } from "react-icons/md";

interface Proptypes {
  onNavigate: (screen: string) => void;
}

const Profile: React.FC<Proptypes> = ({ onNavigate }) => {
  const { strings, loading, setErrors, theme } = useUi();
  const { info, getUserInfo } = useUser();
  const captureRef = useRef(null);

  useEffect(() => {
    getUserInfo();
  }, []);

  /*
  const onShare = useCallback(async () => {
    try {
      const result = await takeShot(captureRef, {
        quality: 1,
        format: 'png',
      });

      await Sharing.shareAsync(result);
    } catch (err) {
      setErrors({ defaultError: { message: strings.defaultError } });
    }
  }, [captureRef]);
*/
  return (
    <Container>
      <AppBar
        title={strings.myProfile}
        primaryAction={() => <MdShare size={24} color={theme.colors.action} />}
        // onPrimaryAction={onShare}
        secondaryAction={() => <MdEdit size={24} color={theme.colors.action} />}
        onSecondaryAction={() => onNavigate("EditAccount")}
      />
      {loading ? (
        <Loading />
      ) : (
        <Content>
          {info && <PlayerCard data={info} captureRef={captureRef} />}
        </Content>
      )}
    </Container>
  );
};

export default Profile;
