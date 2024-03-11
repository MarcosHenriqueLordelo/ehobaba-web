import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import IconButton from '../IconButton'

import getStyles from './styles';

import useUi from '../../contexts/ui/useUi';

interface PropTypes {
  position: 'top' | 'bottom';
}

const SnackBar: React.FC<PropTypes> = ({ position }) => {
  const { theme, errors } = useUi();

  const [styles, setStyles] = useState(getStyles(theme));

  const animatedValue = useRef(new Animated.Value(0));
  const timeout = useRef<NodeJS.Timeout | null>();

  useEffect(() => {
    setStyles(getStyles(theme));
  }, [theme]);

  useEffect(() => {
    if (errors.defaultError !== undefined) showSnackBar();
    else hideSnackBar();
  }, [errors]);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  });

  const showSnackBar = () => {
    Animated.timing(animatedValue.current, {
      toValue: 1,
      useNativeDriver: false,
    }).start(() => {
      timeout.current = setTimeout(() => {
        hideSnackBar();
      }, 2000);
    });
  };

  const hideSnackBar = () => {
    Animated.timing(animatedValue.current, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.snackBar,
        {
          [position]: animatedValue.current.interpolate({
            inputRange: [0, 1],
            outputRange: [-300, 20],
          }),
        },
      ]}
    >
      <View style={styles.content}>
        <IconButton size={24} color="#FFFFFF" name="warning" />
        <Text style={styles.message}>{errors.defaultError?.message}</Text>
      </View>
    </Animated.View>
  );
};

export default SnackBar;
