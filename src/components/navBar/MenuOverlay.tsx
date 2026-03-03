import NavLink from "../navLink/NavLink";

interface MenuOverlayProps {
  links: Array<{ href: string; title: string }>;
  onItemClick?: () => void;
}
const MenuOverlay = ({ links, onItemClick }: MenuOverlayProps) => (
  <div className="md:hidden mt-3 rounded-2xl border border-slate-800 bg-[#151515]/95 backdrop-blur-md shadow-xl p-3">
    <ul className="flex flex-col gap-1">
      {links.map(({ href, title }) => (
        <li key={href}>
          <NavLink
            href={href}
            title={title}
            className="text-base"
            onClick={onItemClick}
          />
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      onClick={onItemClick}
      className="mt-3 block w-full text-center px-4 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold"
    >
      Let&apos;s Talk
    </a>
  </div>
);

export default MenuOverlay;
