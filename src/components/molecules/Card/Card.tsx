import {
    backgroundColorMap,
    borderColorMap,
    borderMap,
    paddingMap,
    radiusMap,
    shadowMap,
    textColorLighterMap,
    textColorMap,
    textOverflowMap,
    displayMap,
    type AspectImage,
    aspectMap,
} from "../../../utils/tailwindMapper";
import "./card.css";
import { heighMap, widthMap, type CardStyle } from "./tailwindCardMapper";



export interface DataCardProps {
    key: string;
    value: string;
    separator?: ":" | "|" | "=>";
}
export interface CardProps extends CardStyle {
    title: string;
    description?: string;
    data?: DataCardProps[];
    image?: string;
    //todo Not working as expected
    aspectImage?: AspectImage;
}



export const Card = ({
    title,
    description,
    data,
    image,
    radius,
    border,
    borderColor,
    backgroundColor,
    shadow,
    padding,
    size,
    width,
    height,
    textColor,
    textOverflow,
    display,
    aspectImage

}: CardProps) => {

    const classNames = [
        display && displayMap[display],
        radius && radiusMap[radius],
        border && borderMap[border],
        shadow && shadowMap[shadow],
        padding && paddingMap[padding],
        size && heighMap[size] && widthMap[size],
        !size && width && widthMap[width],
        !size && height && heighMap[height],
        backgroundColor && backgroundColorMap[backgroundColor],
        borderColor && borderColorMap[borderColor],
        textColor && textColorMap[textColor],
        textOverflow && textOverflowMap[textOverflow],
        "overflow-hidden"
    ]
        .filter(Boolean)
        .join(" ");


    return (
        <div className={classNames}>
            {image && (
                <div >
                    <img className={aspectImage && aspectMap[aspectImage]} src={image} />
                </div>
            )}

            <div className="inline">
                <h3 >{title}</h3>
                {description && <p className={[textColor && textColorLighterMap[textColor]].filter(Boolean)
                    .join(" ")}>{description}</p>}
                {data &&
                    data.map((entry) => (
                        <div>
                            <span>{entry.key}</span>
                            <span>{entry.separator || ":"}</span>
                            <span>{entry.value}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
};
