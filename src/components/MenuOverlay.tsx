import NavLink from "./NavLink";

interface MenuOverlayProps {
  links: Array<{ href: string; title: string }>;
}
const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map(({href, title}) => (
        <li key={href}>
          <NavLink href={href} title={title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
