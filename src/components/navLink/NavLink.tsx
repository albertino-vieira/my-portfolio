export interface NavLinkProps {
  href: string;
  title: string;
}
const NavLink = ({ href, title }: NavLinkProps) => (
  <a
    className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white "
    href={href}
  >
    {title}
  </a>
);

export default NavLink;
