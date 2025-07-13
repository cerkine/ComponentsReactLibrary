import NavList, { type NavListProps } from "./NavList";

const SideBarList = (props: Omit<NavListProps, "direction">) => (
    <NavList {...props} direction="vertical" alignment="left" />
);

export default SideBarList;