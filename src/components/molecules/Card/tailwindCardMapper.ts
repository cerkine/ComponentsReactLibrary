import type { GenericStyle } from "../../../utils/tailwindMapper";

export type SizeVariant = "extraSmall" | "small" | "medium" | "large" | "extraLarge" | "fit" | "auto";




export interface CardStyle extends GenericStyle {
    size?: SizeVariant
    width?: SizeVariant;
    height?: SizeVariant;
}

export const widthMap: Record<SizeVariant, string> = {
    extraSmall: "w-48 min-w-[10rem] max-w-[14rem]",      // 160-224px range
    small: "w-64 min-w-[14rem] max-w-[18rem]",           // 224-288px range
    medium: "w-80 min-w-[18rem] max-w-[22rem]",          // 288-352px range
    large: "w-96 min-w-[22rem] max-w-[26rem]",           // 352-416px range
    extraLarge: "w-[28rem] min-w-[24rem] max-w-[32rem]", // 384-512px range
    fit: "w-fit min-w-[8rem]",                           // Fits content but at least 128px
    auto: "w-auto"                                       // Pure content-based width
};


export const heighMap: Record<SizeVariant, string> = {
    extraSmall: "h-48 min-h-[10rem] max-h-[14rem]",   // 160-224px range
    small: "h-64 min-h-[14rem] max-h-[18rem]",   // 224-288px range
    medium: "h-80 min-h-[18rem] max-h-[22rem]",   // 288-352px range
    large: "h-96 min-h-[22rem] max-h-[26rem]",   // 352-416px range
    extraLarge: "h-[28rem] min-h-[24rem] max-h-[32rem]", // 384-512px range
    auto: "h-auto",
    fit: "h-fit min-h-[12rem]" // Minimum 192px
};


