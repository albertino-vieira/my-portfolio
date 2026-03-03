import Logo from "../../assets/logo.png";

const Footer = () => (
  <footer className="footer border z-10 border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent text-white">
    <div className="container p-8 md:p-12 flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="h-[44px]">
        <img src={Logo} alt="logo" className="h-[44px]" />
      </div>
      <p className="text-slate-400 text-sm">
        © {new Date().getFullYear()} Albertino Vieira. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
