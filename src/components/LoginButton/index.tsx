import React from 'react';
import useUi from '../../contexts/ui/useUi';
import { Label, Container, LoadingContainer } from './styles';

type ButtonType = 'Google' | 'Facebook' | 'Email';

interface PropTypes {
  onPress?: () => void;
  type: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  label: string;
}

const LoginButton: React.FC<PropTypes> = ({
  onPress,
  type,
  disabled,
  loading,
  label,
}) => {
  const { theme } = useUi();

  const getColor = (type: ButtonType): string => {
    switch (type) {
      case 'Email':
        return theme.colors.action;
      case 'Facebook':
        return '#4267B2';
      default:
        return '#DE5246';
    }
  };

  return (
    <Container disabled={disabled} onClick={onPress} color={getColor(type)}>
      {!loading && <Label disabled={loading || disabled}>{label}</Label>}
      {loading && (
        <LoadingContainer>
          <div color={theme.colors.font} />
        </LoadingContainer>
      )}
    </Container>
  );
};

export default LoginButton;
