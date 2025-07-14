import type React from "react";
import { NavLink, type NavLinkProps } from "../../atoms/NavLink/NavLink";
import "./NavList.css";

export interface NavListProps {
    links: NavLinkProps[];
    genericStyle: Omit<NavLinkProps, 'to' | 'label'>;
    // Optional prop to define the gap between links
    gap?: 'none' | 'small' | 'medium' | 'large';
    align?: 'left' | 'center' | 'right';
    fill?: boolean;
}
const NavList = ({
    links,
    genericStyle,
    gap = 'medium',
    align = 'left',
    fill = false,
}: NavListProps) => {

    const classNames = [
        "nav-list",
        `nav-list-gap-${gap}`,
        `nav-list-align-${align}`,
        fill && 'nav-list-fill',
    ].filter(Boolean).join(" ");
    const style = {
        display: 'flex',
        gap: gap,
    } as React.CSSProperties;
    return (
        <nav className={classNames} style={style}>
            {links.map((link) => (
                <NavLink
                    key={link.to}
                    fill={fill}
                    {...genericStyle}
                    {...link}
                />
            ))}
        </nav>
    )
};

export default NavList;