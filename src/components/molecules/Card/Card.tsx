import './card.css'

export interface DataCardProps {
    key: string;
    value: string;
    separator?: ':' | '|' | '=>';

}

export interface CardProps {

    type: 'left' | 'top' | 'right';
    title: string;
    description?: string;
    data?: DataCardProps[];
    image?: string

    // Style props

    radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
    border?: 'none' | 'thin' | 'medium' | 'thick';
    borderColor?: string;
    bg?: string;
    shadow?: 'none' | 'small' | 'medium' | 'large';
    size?: 'small' | 'medium' | 'large';
    width?: 'small' | 'medium' | 'large';
};

export const Card = ({
    type = 'top',
    title,
    description,
    data,
    image,

    radius = 'medium',
    border = 'thin',
    borderColor = 'gray',
    bg = 'white',
    shadow = 'medium',
    size = 'medium',
    width = 'medium'
}: CardProps) => {

    const classNames = [
        "card",
        `card-${type}`,
        `card-radius-${radius}`,
        `card-border-${border}`,
        `card-border-${borderColor}`,
        `card-bg-${bg}`,
        `card-shadow-${shadow}`,
        `card-size-${size}`,
        `card-width-${width}`,
    ].filter(Boolean).join(" ");

    // const style = {
    //     color: labelColor,
    //     backgroundColor,
    //     ...(hoverEffect && {
    //         '--nav-link-hover-bg': hoverBackgroundColor,
    //         '--nav-link-hover-color': hoverColor,
    //     }),
    // } as React.CSSProperties;

    return (
        <div className={classNames}>
            {type === 'top' && image && (
                <div className="card-image card-image-top">
                    <img src={image}  />
                </div>
            )}

            {type === 'left' && image && (
                <div className="card-image card-image-left">
                    <img src={image} />
                </div>
            )}

            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                {description && <p className="card-description">{description}</p>}
                {data && data.map((entry) => (
                    <div className="card-data">
                        <span className="data-key">{entry.key}</span>
                        <span className="data-separator">{entry.separator || ':'}</span>
                        <span className="data-value">{entry.value}</span>
                    </div>
                ))}
            </div>

            {type === 'right' && image && (
                <div className="card-image">
                    <img src={image} alt={title} />
                </div>
            )}
        </div>
    );
};