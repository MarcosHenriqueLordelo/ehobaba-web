import React from "react";
import useUi from "../../contexts/ui/useUi";
import { Label, Container } from "./styles";
import { Loader } from "../Loading";

type ButtonType = "Google" | "Facebook" | "Email";

interface PropTypes {
  onPress?: () => void;
  type: ButtonType;
  loading?: boolean;
  label: string;
}

const LoginButton: React.FC<PropTypes> = ({
  onPress = () => {},
  type,
  loading,
  label,
}) => {
  const { theme } = useUi();

  const getColor = (type: ButtonType): string => {
    switch (type) {
      case "Email":
        return theme.colors.action;
      case "Facebook":
        return "#4267B2";
      default:
        return "#DE5246";
    }
  };

  return (
    <Container
      onClick={() => {
        if (!loading) onPress();
      }}
      color={getColor(type)}
    >
      {!loading && <Label disabled={loading}>{label}</Label>}
      {loading && <Loader />}
    </Container>
  );
};

export default LoginButton;
