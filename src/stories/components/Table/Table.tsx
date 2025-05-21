import './Table.css';

export interface TableProps {
  columns: number;
  data: string[][];
  variant?: 'grid' | 'list';
  textColor?: string;
  backgroundColor?: string;
  hoverColor?: string;
  borders?: 'none' | 'cell' | 'row';
  fullWidth?: boolean;
}

export const Table = ({
  columns,
  data,
  variant = 'grid',
  textColor,
  backgroundColor,
  hoverColor,
  borders = 'cell',
  fullWidth = false,
}: TableProps) => {
  const styleVars = {
    '--text-color': textColor || '#000',
    '--bg-color': backgroundColor || '#fff',
    '--hover-color': hoverColor || '#f9f9f9',
  } as React.CSSProperties;

  const className = [
    'table',
    variant,
    `borders-${borders}`,
    fullWidth && 'full-width',
  ]
    .filter(Boolean)
    .join(' ');

  const gridTemplateColumns = `repeat(${columns}, 1fr)`;

  return (
    <div className={className} style={styleVars}>
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="table-row"
          style={variant === 'grid' ? { gridTemplateColumns } : {}}
        >
          {row.slice(0, columns).map((cell, cellIndex) => (
            <div key={cellIndex} className="table-cell">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
