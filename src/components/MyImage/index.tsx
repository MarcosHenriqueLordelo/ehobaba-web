import React, { useEffect, useState } from 'react';

import { Img } from './styles';

import defaultImg from '../../assets/user.jpg';

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

  return (
    <Img
      onLoadEnd={() => setShowDefault(false)}
      onError={() => setError(true)}
      source={showDefault || error ? defaultImg : { uri: imageUri }}
      size={size}
      rounded={rounded}
    />
  );
};

export default MyImage;