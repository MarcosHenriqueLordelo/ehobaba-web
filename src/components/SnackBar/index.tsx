import React, { useEffect, useRef, useState } from "react";
import IconButton from "../IconButton";
import { MdWarningAmber } from "react-icons/md";

import { Container, Content, Message } from "./styles";

import useUi from "../../contexts/ui/useUi";

interface PropTypes {
  position: "top" | "bottom";
}

const SnackBar: React.FC<PropTypes> = () => {
  const { errors } = useUi();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (errors.defaultError !== undefined) showSnackBar();
  }, [errors]);

  const showSnackBar = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  return (
    <Container visible={visible}>
      <Content>
        <IconButton
          size={24}
          renderIcon={() => <MdWarningAmber color='#FFFFFF' size={24} />}
        />
        <Message>{errors.defaultError?.message}</Message>
      </Content>
    </Container>
  );
};

export default SnackBar;
