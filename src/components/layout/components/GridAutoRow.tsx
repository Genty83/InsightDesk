import React from 'react';
import styled from 'styled-components';

type GridProps = {
  fillType?: 'auto-fit' | 'auto-fill';
  minWidth?: string;
  maxWidth?: string;
  gap?: string;
  width?: string;
  height?: string;
  align?: string;
  justify?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const StyledGrid = styled.div<{
  $fillType: string;
  $minWidth: string;
  $maxWidth: string;
  $gap: string;
  $width: string;
  $height: string;
  $align: string;
  $justify: string;
}>`
  display: grid;
  grid-template-columns: repeat(${p => p.$fillType}, minmax(${p => p.$minWidth}, ${p => p.$maxWidth}));
  gap: ${p => p.$gap};
  width: ${p => p.$width};
  height: ${p => p.$height};
  align-items: ${p => p.$align};
  justify-content: ${p => p.$justify};
`;

const GridAutoRow: React.FC<GridProps> = ({
  fillType = 'auto-fit',
  minWidth = '250px',
  maxWidth = '1fr',
  gap = '1rem',
  width = '100%',
  height = '100%',
  align = 'center',
  justify = 'center',
  children,
  ...rest
}) => {
  return (
    <StyledGrid
      $fillType={fillType}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $gap={gap}
      $width={width}
      $height={height}
      $align={align}
      $justify={justify}
      {...rest}
    >
      {children}
    </StyledGrid>
  );
};

export default GridAutoRow;