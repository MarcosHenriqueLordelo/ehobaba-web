import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

const styles = (theme: DefaultTheme) =>
  StyleSheet.create({
    snackBar: {
      position: 'absolute',
      width: '100%',
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      marginHorizontal: 16,
      marginVertical: 8,
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: theme.colors.error,
      borderRadius: 10,
      alignItems: 'center',
    },
    message: {
      color: '#FFFFFF',
      fontSize: 16,
      marginLeft: 16,
    },
  });

export default styles;
