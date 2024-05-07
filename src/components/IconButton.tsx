import React from "react";

interface PropTypes {
  size: number;
  containerSize?: number;
  onPress?: () => void;
  style?: React.CSSProperties;
  renderIcon: () => JSX.Element;
}

const IconButton: React.FC<PropTypes> = ({
  containerSize,
  onPress,
  style,
  renderIcon,
}) => {
  return (
    <div
      onClick={onPress}
      style={{
        height: containerSize,
        width: containerSize,
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        ...style,
      }}
    >
      {renderIcon()}
    </div>
  );
};

export default IconButton;
