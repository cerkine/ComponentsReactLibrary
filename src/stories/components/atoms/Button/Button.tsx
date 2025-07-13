import './button.css';

/*
label: Text showed on button
size: Optional size selector, values are small, medium and large
onClick: Optional function executed on click
textColor: Optional color of text font
backgroundColor: Optional color of background button
hoverEffect: Activate or desactivate hover of card
hoverColor: Color of hover when selecting row
border: Optional selector of border style level
borderColor: Optional color of border
rounded: Optional selector of rounded style level
shadow: Optional selector of shadow background style level
*/
export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  textColor?: string;
  backgroundColor?: string;
  hoverEffect?: boolean;
  hoverColor?: string;
  border?: 'none' | 'default' | 'strong';
  borderColor?: string;
  rounded?: 'none' | 'medium' | 'strong';
  shadow?: 'none' | 'default' | 'strong';
}

export const Button = ({
  label,
  size = 'medium',
  onClick,
  textColor,
  backgroundColor,
  hoverEffect = false,
  hoverColor = '#f5f5f5',
  border = 'none',
  borderColor,
  rounded = 'medium',
  shadow = 'none'
}: ButtonProps) => {
  //Checks for every style possible and default values and joins all classnames
  const className = [
    'button',
    `button-${size}`,
    `button-rounded-${rounded}`,
    `button-shadow-${shadow}`,
    `button-border-${border}`,
    hoverEffect && 'hover',
  ].filter(Boolean).join(' ');

  //Apply for every style possible
  const style = {
    backgroundColor,
    borderColor,
    color: textColor,
    ...(hoverEffect && { '--button-hover': hoverColor }),
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
