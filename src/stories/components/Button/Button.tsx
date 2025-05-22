import './button.css';

/*
label: Text showed on button
size: Optional size selector, values are small, medium and large
onClick: Optional function executed on click
backgroundColor: Optional color of background button
textColor: Optional color of text font
rounded: Optional selector of rounded style level
shadow: Optional selector of shadow background style level
border: Optional selector of border style level
borderColor: Optional color of border
*/
export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;

  backgroundColor?: string;
  textColor?: string;

  rounded?: 'none' | 'medium' | 'strong';
  shadow?: 'none' | 'default' | 'strong';
  border?: 'none' | 'default' | 'strong';
  borderColor?: string;
}

export const Button = ({
  label,
  size = 'medium',
  onClick,
  backgroundColor,
  textColor,
  rounded = 'medium',
  shadow = 'none',
  border = 'none',
  borderColor
}: ButtonProps) => {
  //Checks for every style possible and default values and joins all classnames
  const className = [
    'button',
    size,
    `rounded-${rounded}`,
    `shadow-${shadow}`,
    `border-${border}`,
  ].join(' ');

  const style = {
    backgroundColor,
    borderColor,
    color: textColor,
  } as React.CSSProperties;

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
