import React from "react";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import useUi from "../contexts/ui/useUi";

interface PropTypes {
  name: keyof typeof MaterialIcon.glyphMap;
  size: number;
  containerSize?: number;
  onPress?: () => void;
  style?: any;
  color?: string;
}

const IconButton: React.FC<PropTypes> = ({
  containerSize,
  name,
  onPress,
  size,
  style,
  color,
}) => {
  const { theme } = useUi();

  return (
    <div
      onClick={onPress}
      style={{
        height: containerSize,
        width: containerSize,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <MaterialIcon
        name={name}
        size={size}
        color={color || theme.colors.action}
      />
    </div>
  );
};

export default IconButton;
