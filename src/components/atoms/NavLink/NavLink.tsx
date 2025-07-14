import { Link } from "react-router-dom";
import './NavLink.css';

/**
 * NavLink component props interface.
 * 
 */
export interface NavLinkProps {
    to: string;
    label: string;
    // Additional props can be added as needed
    // For example, you might want to add styles, classes, etc.
    labelColor?: string;
    backgroundColor?: string;
    hoverEffect?: boolean;
    hoverBackgroundColor?: string;
    hoverColor?: string;
    size?: 'small' | 'medium' | 'large';
    rounded?: 'none' | 'medium' | 'strong';
    shadow?: 'none' | 'default' | 'strong';
    border?: 'none' | 'default' | 'strong';
    fill?: boolean; 
}

export const NavLink = ({
    to,
    label,
    labelColor = '#000000',
    backgroundColor = '#ffffff',
    hoverBackgroundColor = '#f5f5f5',
    hoverColor = '#f5f5f5',
    hoverEffect = true,
    size = 'medium',
    rounded = 'none',
    shadow = 'none',
    border = 'default',
    fill = false
}: NavLinkProps) => {
    const classNames = [
        "nav-link",
        size && `nav-link-${size}`,
        rounded && `nav-link-rounded-${rounded}`,
        shadow && `nav-link-shadow-${shadow}`,
        border && `nav-link-border-${border}`,
        hoverEffect && 'hover',
        fill && 'nav-link-fill',
    ].filter(Boolean).join(" ");

    const style = {
        color: labelColor,
        backgroundColor,
        ...(hoverEffect && {
            '--nav-link-hover-bg': hoverBackgroundColor,
            '--nav-link-hover-color': hoverColor,
        }),
    } as React.CSSProperties;

    return (
        <Link
            to={to}
            className={classNames}
            style={style}
        >
            {label}
        </Link>
    );
};

