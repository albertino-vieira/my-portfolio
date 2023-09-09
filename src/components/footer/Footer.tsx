import Logo from "../../assets/logo.png";
const Footer = () => (
  <footer className="footer border z-10 border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent text-white">
    <div className="container p-12 flex justify-between">
      <div className="h-[44px]">
        <img src={Logo} alt="logo" className="h-[44px]"/>
      </div>
      <p className="text-slate-600">All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
