export type Radius = "small" | "medium" | "large" | "none";
export type Border = "none" | "thin" | "thick";
export type BorderColor = "gray" | "red" | "blue";
export type BackgroundColor = "white" | "gray" | "blue";
export type Shadow = "none" | "small" | "medium" | "large";
export type Padding = "small" | "medium" | "large" | "extraLarge";
export type TextColor = "black" | "red" | "green" | "yellow";
export type TextOverflow = "truncate" | "wrap";
export type Display = "column";
export type AspectImage = "square" | "landscape" | "portrait";

export const displayMap: Record<Display, string> = {
    column: 'flex flex-col'
};

export const radiusMap: Record<Radius, string> = {
    none: "rounded-none",
    small: "rounded-sm",
    medium: "rounded-md",
    large: "rounded-lg",
};

export const borderMap: Record<Border, string> = {
    none: "border-0",
    thin: "border",
    thick: "border-2",
};

export const borderColorMap: Record<BorderColor, string> = {
    gray: "border-gray-300",
    red: "border-red-500",
    blue: "border-blue-500",
};

export const backgroundColorMap: Record<BackgroundColor, string> = {
    white: "bg-white",
    gray: "bg-gray-100",
    blue: "bg-blue-50",
};

export const shadowMap: Record<Shadow, string> = {
    none: "shadow-none",
    small: "shadow-sm",
    medium: "shadow-md",
    large: "shadow-lg",
};

export const paddingMap: Record<Padding, string> = {
    small: "p-2",
    medium: "p-4",
    large: "p-6",
    extraLarge: "p-8"
};



export const textColorMap: Record<TextColor, string> = {
    black: "text-black",
    red: "text-red-500",
    green: "text-green-500",
    yellow: "text-yellow-500",
};

export const textColorLighterMap: Record<TextColor, string> = {
    black: "text-gray-600",
    red: "text-red-300",
    green: "text-green-300",
    yellow: "text-yellow-300",
};

//TODO: Not working 
export const textOverflowMap: Record<TextOverflow, string> = {
    truncate: "truncate",
    wrap: ""
};


export const aspectMap: Record<AspectImage, string> = {
    square: "aspect-square",
    landscape: "aspect-video",
    portrait: "aspect-[3/4]"
}

export type GenericStyle = {
    display?: Display;
    radius?: Radius;
    shadow?: Shadow;
    border?: Border;
    borderColor?: BorderColor;
    backgroundColor?: BackgroundColor;
    padding?: Padding;
    textColor?: TextColor;
    textOverflow?: TextOverflow;

};