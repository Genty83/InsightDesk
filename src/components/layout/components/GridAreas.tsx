import React from 'react';
import styled from 'styled-components';

interface GridAreasProps extends React.HTMLAttributes<HTMLDivElement> {
  areas: string[]; // like ['header header', 'sidebar content']
  columns?: string; // e.g. '240px 1fr'
  rows?: string;    // e.g. '60px 1fr 40px'
  gap?: string;
  height?: string;
  width?: string;
  align?: string;
  justify?: string;
  children?: React.ReactNode;
}

const StyledGrid = styled.div<{
  $columns: string;
  $rows: string;
  $gap: string;
  $width: string;
  $height: string;
  $align: string;
  $justify: string;
  $areas: string;
}>`
  display: grid;
  grid-template-columns: ${p => p.$columns};
  grid-template-rows: ${p => p.$rows};
  grid-template-areas: ${p => p.$areas};
  gap: ${p => p.$gap};
  width: ${p => p.$width};
  height: ${p => p.$height};
  align-items: ${p => p.$align};
  justify-content: ${p => p.$justify};
`;

const GridAreas: React.FC<GridAreasProps> = ({
  areas,
  columns = '1fr',
  rows = 'auto',
  gap = '1rem',
  height = '100%',
  width = '100%',
  align = 'stretch',
  justify = 'stretch',
  children,
  style,
  className,
  ...rest
}) => {
  const areaString = areas.map(row => `"${row}"`).join(' ');
  return (
    <StyledGrid
      $columns={columns}
      $rows={rows}
      $gap={gap}
      $width={width}
      $height={height}
      $align={align}
      $justify={justify}
      $areas={areaString}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </StyledGrid>
  );
};

export default GridAreas;