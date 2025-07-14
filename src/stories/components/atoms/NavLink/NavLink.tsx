import { Link } from "react-router-dom";

/**
 * NavLink component props interface.
 * 
 */
export interface NavLinkProps {
    to: string;
    label: string;
    
}

export const NavLink =({
    to, 
    label
}: NavLinkProps) => {
    return (
        <Link to={to} className="nav-link">
            {label}
        </Link>
    );
};

