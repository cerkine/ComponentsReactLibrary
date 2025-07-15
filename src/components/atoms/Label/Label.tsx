import './Label.css';

/**
 * Label component props interface.
 */
export interface LabelProps {
    text: string;
    size?: 'small' | 'medium' | 'large';
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: 'none' | 'small' | 'medium' | 'large';
    shadow?: 'none' | 'default' | 'strong';
}

export const Label = ({
    text,
    size = 'medium',
    color = '#000000',
    backgroundColor = '#ffffff',
    borderColor = '#cccccc',
    borderRadius = 'none',
    shadow = 'none'
}: LabelProps) => {
    const classNames = [
        "label",
        `label-${size}`,
        `label-border-${borderRadius}`,
        `label-shadow-${shadow}`,
    ].filter(Boolean).join(" ");

    const style: React.CSSProperties = {
        color,
        backgroundColor,
        borderColor,
    };

    return (
        <span className={classNames} style={style}>
            {text}
        </span>
    );
};