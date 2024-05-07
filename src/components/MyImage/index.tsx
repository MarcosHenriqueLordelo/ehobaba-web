import React, { useEffect, useMemo, useState } from "react";

import { Img } from "./styles";

import defaultImg from "../../assets/user.jpg";

interface PropTypes {
  size: number;
  rounded?: boolean;
  uri: string;
}

const MyImage: React.FC<PropTypes> = ({ size, rounded, uri }) => {
  const [showDefault, setShowDefault] = useState(true);
  const [error, setError] = useState(false);
  const [imageUri, setImageUri] = useState(uri);

  useEffect(() => {
    if (uri !== imageUri) {
      setImageUri(uri);
      setError(false);
      setShowDefault(false);
    }
  }, [uri]);

  const getImage = useMemo(() => {
    if (error || showDefault) return defaultImg;
    return imageUri;
  }, [error, showDefault]);

  return (
    <Img
      onError={() => setError(true)}
      onLoad={() => setShowDefault(false)}
      src={getImage}
      size={size}
      rounded={rounded}
    />
  );
};

export default MyImage;
