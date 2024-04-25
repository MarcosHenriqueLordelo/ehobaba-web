import React from 'react';
import styled from 'styled-components';

interface PropTypes {
  width?: number;
  height?: number;
}

const Container = styled.div<PropTypes>`
  ${({ width }) => width && `width: ${width}px;`}
  ${({ height }) => height && `height: ${height}px;`}
`;

const Spacer: React.FC<PropTypes> = ({ width, height }) => (
  <Container width={width} height={height} />
);

export default Spacer;
