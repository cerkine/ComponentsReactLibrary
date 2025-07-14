import type React from "react";
import { NavLink, type NavLinkProps } from "../../atoms/NavLink/NavLink";
import "./NavList.css";


/**
 * Props for the NavList component.
 * @property links - Array of NavLinkProps to render as links.
 * @property genericStyle - Generic styles to apply to all links, excluding 'to' and 'label'.
 * @property gap - Optional prop to define the gap between links, can be 'none', 'small', 'medium', or 'large'.
 * @property align - Optional prop to define the alignment of the links, can be 'left', 'center', or 'right'.
 * @property fill - Optional prop to determine if the links should fill the available space.
 */
export interface NavListProps {
    links: NavLinkProps[];
    genericStyle?: Omit<NavLinkProps, 'to' | 'label'>;
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
                    // Pass the generic styles and link props to the NavLink
                    {...(genericStyle && { ...genericStyle })}
                    {...link}
                />
            ))}
        </nav>
    )
};

export default NavList;