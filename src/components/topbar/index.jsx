import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-24 py-4 border">
      <div className="flex justify-between items-center gap-1 ">
        <span className="bg-slate-200 p-1 rounded-md">
          <img className="w-4" src={facebook} alt="facebook" />
        </span>
        <span className="bg-slate-200 p-1 rounded-md">
          <img className="w-4" src={twitter} alt="twitter" />
        </span>
        <span className="bg-slate-200 p-1 rounded-md">
          <img className="w-4" src={instagram} alt="intagram" />
        </span>
        <span className="bg-slate-200 p-1 rounded-md">
          <img className="w-4" src={linkedin} alt="linkedin" />
        </span>
      </div>
      <div className="text-light-text text-sm font-medium">
        FREE SHIPPING THIS WEEK ORDER OVER - $55
      </div>
      <div className="flex gap-2">
        <select className="text-slate-400 text-sm focus:outline-none px-8">
          <option>USD $</option>
        </select>
        <select className="text-slate-400 text-sm focus:outline-none px-8">
          <option>ENGLISH</option>
        </select>
      </div>
    </div>
  );
};

export default Topbar;
