import './Input.css';


/**
 * Generated Input component props interface.
 */
export interface InputProps {
    type: 'text' | 'password' | 'email' | 'number';
    placeholder?: string;
    onChange?: (value: string) => void;
    size?: 'small' | 'medium' | 'large';
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: 'none' | 'small' | 'medium' | 'large';
    shadow?: 'none' | 'default' | 'strong';
    disabled?: boolean;
    required?: boolean;
    autoFocus?: boolean;
    value?: string;
}

export const Input = ({
    type,
    placeholder = '',
    size = 'medium',
    textColor = '#000000',
    backgroundColor = '#ffffff',
    borderColor = '#cccccc',
    borderRadius = 'medium',
    shadow = 'none',
    disabled = false,
    required = false,
    autoFocus = false
}: InputProps) => {
    const classNames = [
        "input",
        `input-${size}`,
        `input-border-${borderRadius}`,
        `input-shadow-${shadow}`,
        disabled && 'input-disabled'
    ].filter(Boolean).join(" ");

    const style: React.CSSProperties = {
        color: textColor,
        backgroundColor,
        borderColor,
        ...(disabled && { cursor: 'not-allowed' }),
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            className={classNames}
            style={style}
            disabled={disabled}
            required={required}
            autoFocus={autoFocus}
        />
    );
};