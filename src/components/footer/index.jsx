import BrandDirectory from "./brandDirectory";
import Copyright from "./copyright";
import FooterOverview from "./footerOverview";

const Footer = () => {
  return (
    <div className="bg-theme-dark text-white mt-8">
      <BrandDirectory />
      <FooterOverview />
      <Copyright />
    </div>
  );
};

export default Footer;
