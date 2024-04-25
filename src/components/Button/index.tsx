import React from 'react';
import useUi from '../../contexts/ui/useUi';
import { Container, Label, LoadingContainer } from './styles';

interface PropTypes {
  onClick?: () => void;
  label: string;
  dark?: boolean;
  labelAction?: boolean;
  transparent?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<PropTypes> = ({
  onClick,
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
      onClick={onClick}
      transparent={transparent}
      disabled={loading || disabled}
    >
      <Label labelAction={labelAction} disabled={loading || disabled}>
        {label}
      </Label>
      {loading && (
        <LoadingContainer>
          <div color={theme.colors.font} />
        </LoadingContainer>
      )}
    </Container>
  );
};

export default Button;
