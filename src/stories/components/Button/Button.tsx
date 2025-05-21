import './button.css';

export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;

  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;

  rounded?: 'none' | 'medium' | 'strong';
  shadow?: 'none' | 'default' | 'strong';
  border?: 'none' | 'default' | 'strong';
}

export const Button = ({
  label,
  size = 'medium',
  onClick,
  backgroundColor,
  borderColor,
  textColor,
  rounded = 'medium',
  shadow = 'none',
  border = 'none',
}: ButtonProps) => {
  const className = [
    'button',
    size,
    `rounded-${rounded}`,
    `shadow-${shadow}`,
    `border-${border}`,
  ].join(' ');

  const style: React.CSSProperties = {
    backgroundColor,
    borderColor,
    color: textColor,
  };

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
