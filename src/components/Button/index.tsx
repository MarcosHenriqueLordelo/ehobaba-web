import React from 'react';
import useUi from '../../contexts/ui/useUi';
import { ActivityLoader, Container, Label, LoadingContainer } from './styles';

interface PropTypes {
  onPress?: () => void;
  label: string;
  dark?: boolean;
  labelAction?: boolean;
  transparent?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<PropTypes> = ({
  onPress,
  label,
  dark,
  labelAction,
  transparent,
  loading,
  disabled,
}) => {
  const { theme } = useUi();

  return (
    <Container
      dark={dark}
      onPress={onPress}
      transparent={transparent}
      disabled={loading || disabled}
    >
      <Label labelAction={labelAction} disabled={loading || disabled}>
        {label}
      </Label>
      {loading && (
        <LoadingContainer>
          <ActivityLoader color={theme.colors.font} />
        </LoadingContainer>
      )}
    </Container>
  );
};

export default Button;
