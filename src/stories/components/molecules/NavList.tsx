import { NavLink, type NavLinkProps } from "../atoms/NavLink/NavLink";
import "./NavList.css";

export interface NavListProps {
    links: NavLinkProps[];

}
const NavList = ({
    links
}: NavListProps) => (
    <nav>
        {links.map((link) => (
            <NavLink
                key={link.to} to={link.to} label={link.label}
            />
        ))}
    </nav>
);

export default NavList;