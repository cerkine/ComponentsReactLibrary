import type React from "react";
import { NavLink, type NavLinkProps } from "../../atoms/NavLink/NavLink";
import "./NavBar.css";


/**
 * Props for the NavBar component.
 * @property links - Array of NavLinkProps to render as links.
 * @property genericStyle - Generic styles to apply to all links, excluding 'to' and 'label'.
 * @property gap - Optional prop to define the gap between links, can be 'none', 'small', 'medium', or 'large'.
 * @property align - Optional prop to define the alignment of the links, can be 'left', 'center', or 'right'.
 * @property fill - Optional prop to determine if the links should fill the available space.
 */
export interface NavBarProps {
    links: NavLinkProps[];
    genericStyle?: Omit<NavLinkProps, 'to' | 'label'>;
    // Optional prop to define the gap between links
    gap?: 'none' | 'small' | 'medium' | 'large';
    align?: 'left' | 'center' | 'right';
    fill?: boolean;
    backgroundColor?: string;
}
const NavBar = ({
    links,
    genericStyle,
    gap = 'medium',
    align = 'left',
    fill = false,
    backgroundColor = '#ffffff',
}: NavBarProps) => {

    const classNames = [
        "nav-bar",
        `nav-bar-gap-${gap}`,
        `nav-bar-align-${align}`,
        fill && 'nav-bar-fill',
    ].filter(Boolean).join(" ");
    const style = {
        display: 'flex',
        gap: gap,
        backgroundColor: backgroundColor,
    } as React.CSSProperties;
    return (
        <nav className={classNames} style={style}>
            {links.map((link) => (
                <NavLink
                    key={link.to}
                    fill={fill}
                    // Pass the generic styles and link props to the NavLink
                    {...(genericStyle && { ...genericStyle })}
                    {...link}
                />
            ))}
        </nav>
    )
};

export default NavBar;