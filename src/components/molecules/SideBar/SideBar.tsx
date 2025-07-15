//generate a SideBar component that imports the NavBar component and uses it to render a navigation bar with links.
import React from 'react';
import './SideBar.css';
import { NavLink, type NavLinkProps } from '../../atoms/NavLink/NavLink';
/**
 * Props for the SideBar component.
 * @property links - Array of NavLinkProps to render as links in the sidebar.
 * @property genericStyle - Generic styles to apply to all links, excluding 'to' and 'label'.
 * @property gap - Optional prop to define the gap between links, can be 'none', 'small', 'medium', or 'large'.
 * @property align - Optional prop to define the alignment of the links, can be 'left', 'center', or 'right'.
 * @property fill - Optional prop to determine if the links should fill the available space.
 */


export interface SideBarProps {
    links: NavLinkProps[];
    genericStyle?: Omit<NavLinkProps, 'to' | 'label'>;
    // Optional prop to define the gap between links
    gap?: 'none' | 'small' | 'medium' | 'large';
    // align?: 'left' | 'center' | 'right';
    fill?: boolean;
    backgroundColor?: string;
    hide?: boolean; // Optional prop to define if the sidebar should be hidden
    align?: 'left' | 'center' | 'right'; 
}

const SideBar = ({
    links,
    genericStyle,
    gap = 'medium',
    fill = false,
    backgroundColor = '#ffffff',
    align = 'left', // Default alignment
}: SideBarProps) => {

    const classNames = [
        "side-bar",
        `side-bar-gap-${gap}`,
        `side-bar-align-${align}`,
        fill && 'side-bar-fill',
    ].filter(Boolean).join(" ");
    
    const style = {
        gap: gap,
        backgroundColor: backgroundColor,
    } as React.CSSProperties;

    //TODO: Same code as NavBar, maybe we can refactor this to avoid code duplication
    return (
        <nav className={classNames} style={style}>
            {links.map((link) => (
                <NavLink
                    key={link.to}
                    // Pass the generic styles and link props to the NavLink
                    {...(genericStyle && { ...genericStyle })}
                    {...link}
                />
            ))}
        </nav>
    );
};

export default SideBar;