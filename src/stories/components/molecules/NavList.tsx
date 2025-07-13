import { NavLink } from "../atoms/NavLink";


export interface NavItem {
    to: string;
    label: string;
    primaryColor?: string;
    alignment?: "left" | "center" | "right";
    buttonType?: "filled" | "outlined" | "text";
    backgroundColor?: string;
    textColor?: string;
    border?: "none" | "default" | "strong";
    borderColor?: string;
}

export interface NavListProps {
    links: NavItem[];
    primaryColor?: string;
    alignment?: "left" | "center" | "right";
    buttonType?: "filled" | "outlined" | "text";
    backgroundColor?: string;
    direction?: "horizontal" | "vertical";
}

const alignmentMap = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
};

const NavList = ({
    links,
    primaryColor = "#2cc749",
    alignment = "left",
    buttonType = "filled",
    backgroundColor = "#fff",
    direction = "horizontal",
}: NavListProps) => (
    <nav
        style={{
            display: "flex",
            flexDirection: direction === "vertical" ? "column" : "row",
            gap: "1rem",
            alignItems: "center",
            justifyContent: alignmentMap[alignment],
            padding: "0.5rem 1rem",
            background: backgroundColor,
            borderBottom: direction === "horizontal" ? `2px solid ${primaryColor}` : undefined,
            height: direction === "vertical" ? "100vh" : undefined,
            minWidth: direction === "vertical" ? 180 : undefined,
        }}
    >
        {links.map((link) => (
            <NavLink
                key={link.to}
                primaryColor={link.primaryColor ?? primaryColor}
                buttonType={link.buttonType ?? buttonType}
                {...link}
            />
        ))}
    </nav>
);

export default NavList;