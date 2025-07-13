import { Button, type ButtonProps } from "./Button/Button";
import { Link } from "react-router-dom";

interface NavLinkProps extends Omit<ButtonProps, "onClick"> {
    to: string;
    primaryColor?: string;
    buttonType?: "filled" | "outlined" | "text";
}

const getButtonStyles = (
    buttonType: "filled" | "outlined" | "text",
    primaryColor?: string,
    backgroundColor?: string,
    textColor?: string,
    border?: ButtonProps["border"],
    borderColor?: string
) => {
    switch (buttonType) {
        case "filled":
            return {
                backgroundColor: backgroundColor ?? primaryColor ?? "#2cc749",
                textColor: textColor ?? "#fff",
                border: border ?? "none",
                borderColor,
            };
        case "outlined":
            return {
                backgroundColor: backgroundColor ?? "transparent",
                textColor: textColor ?? primaryColor ?? "#2cc749",
                border: border ?? "strong",
                borderColor: borderColor ?? primaryColor ?? "#2cc749",
            };
        case "text":
        default:
            return {
                backgroundColor: backgroundColor ?? "transparent",
                textColor: textColor ?? primaryColor ?? "#2cc749",
                border: border ?? "none",
                borderColor,
            };
    }
};

const NavLink = ({
    to,
    label,
    primaryColor = "#2cc749",
    buttonType = "filled",
    backgroundColor,
    textColor,
    border,
    borderColor,
    ...rest
}: NavLinkProps) => {
    const styles = getButtonStyles(
        buttonType,
        primaryColor,
        backgroundColor,
        textColor,
        border,
        borderColor
    );

    return (
        <Link to={to} style={{ textDecoration: "none" }}>
            <Button
                label={label}
                {...styles}
                {...rest}
            />
        </Link>
    );
};

export { NavLink };
export type { NavLinkProps };
