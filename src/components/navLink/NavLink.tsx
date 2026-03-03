export interface NavLinkProps {
  href: string;
  title: string;
  className?: string;
  onClick?: () => void;
}
const NavLink = ({ href, title, className = "", onClick }: NavLinkProps) => (
  <a
    className={`block py-2 px-3 text-[#ADB7BE] sm:text-base rounded-lg transition-all duration-200 hover:text-white hover:bg-white/5 ${className}`}
    href={href}
    onClick={onClick}
  >
    {title}
  </a>
);

export default NavLink;
