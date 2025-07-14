import './table.css';
import React from 'react';

/*
columns: Number of columns wanted to show on table
data: Content of table, can be a combination of different types of data
columndWidth: Optional size of each column wanted
columnAlign: Optional align of content of each column
variant: Optional style of table, can be grid or list
textColor: Optional color of text font
backgroundColor: Optional color of background table
hoverEffect: Activate or desactivate hover of card
hoverColor: Optional color of hover when selecting row
borders: Optional style of the lines of the border you want, values of none, only row and all cells
borderColor: Optional color of border
rounded: Optional selector of rounded style level
shadow: Optional selector of shadow background style level
*/
export interface TableProps {
  columns: number;
  data: React.ReactNode[][];
  columnWidth?: string[];
  columnAlign?: ('left' | 'center' | 'right')[];
  variant?: 'grid' | 'list';
  textColor?: string;
  backgroundColor?: string;
  hoverEffect?: boolean;
  hoverColor?: string;
  borders?: 'none' | 'cell' | 'row';
  borderColor?: string;
  rounded?: 'none' | 'medium' | 'strong';
  shadow?: 'none' | 'default' | 'strong';
}

//Range of size for column, tagged with keywords
const getColumnWidth = (value: string): string => {
  const map: Record<string, string> = {
    small: '100px',
    medium: '200px',
    large: '300px',
    auto: 'auto',
    full: '1fr',
  };
  return map[value] || value;
};

export const Table = ({
  columns,
  data,
  columnWidth,
  columnAlign,
  variant = 'grid',
  textColor,
  backgroundColor,
  hoverEffect = false,
  hoverColor,
  borders = 'cell',
  borderColor = 'black',
  rounded = 'medium',
  shadow = 'none'
}: TableProps) => {
  //Join all classnames selected
  const className = [
    'table',
    variant,
    `table-rounded-${rounded}`,
    `table-shadow-${shadow}`,
    `borders-${borders}`,
    hoverEffect && 'hover',
  ].filter(Boolean).join(' ');

  //Apply for every style possible and default values
  const styleVars = {
    '--text-color': textColor || '#000',
    '--bg-color': backgroundColor || '#fff',
    '--border-color': borderColor,
    ...(hoverEffect && { '--table-hover': hoverColor }),
    
  } as React.CSSProperties;


  //Transforms the keywords received to apply columnWidth on grid variant
  const gridTemplateColumns =
    columnWidth
      ? columnWidth.slice(0, columns).map(getColumnWidth).join(' ')
      : `repeat(${columns}, 1fr)`;

  return (
    <div className={className} style={styleVars}>
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="table-row"
          style={
            variant === 'grid'
              ? { gridTemplateColumns }
              : { display: 'flex' }
          }
        >
          {row.slice(0, columns).map((cell, cellIndex) => {
          const align = columnAlign?.[cellIndex] || 'left';
          return(
            
            <div
              key={cellIndex}
              className="table-cell"
              style={{
                textAlign: align,
                ...(variant === 'list' && columnWidth
                  ? { flex: `0 0 ${getColumnWidth(columnWidth[cellIndex] || '')}` }
                  : {})
              }}
            >
              {cell}
            </div>
          )})}
        </div>
      ))}
    </div>
  );

};
