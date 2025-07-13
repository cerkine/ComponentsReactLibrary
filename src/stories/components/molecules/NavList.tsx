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
}: {
    links: NavItem[];
    primaryColor?: string;
    alignment?: "left" | "center" | "right";
    buttonType?: "filled" | "outlined" | "text";
    backgroundColor?: string;
}) => (
    <nav
        style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: alignmentMap[alignment],
            padding: "0.5rem 1rem",
            background: backgroundColor,
            borderBottom: `2px solid ${primaryColor}`,
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