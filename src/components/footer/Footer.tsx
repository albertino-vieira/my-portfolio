import Logo from "../../assets/logo.png";

const Footer = () => (
  <footer className="border z-10 border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent text-white">
    <div className="container max-w-7xl p-8 mx-auto flex flex-col md:flex-row justify-between gap-4 items-center">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Albertino Vieira logo" className="h-[44px]" />
        <p className="text-sm text-[#ADB7BE]">Lead Full Stack Developer</p>
      </div>
      <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Albertino Vieira. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
