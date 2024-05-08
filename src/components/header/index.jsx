import search from "../../assets/icons/search.png";
import user from "../../assets/icons/user.svg";
import heart from "../../assets/icons/heart.svg";
import bag from "../../assets/icons/bag.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { cartItems, wishedListItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/cart");
  };
  return (
    <div className="flex justify-between items-center px-24 py-4 border-b">
      <div className="text-3xl font-bold">Anon</div>
      <div className="flex justify-between items-center w-2/3 border p-3 rounded-md">
        <input
          className="flex-1 focus:outline-none"
          type="text"
          placeholder="Enter your product name..."
        />
        <img className="w-4" src={search} alt="" />
      </div>
      <div className="flex items-center gap-6">
        <div className="relative flex items-center">
          <img className="w-8 cursor-pointer" src={user} alt="" />
        </div>
        <div className="relative flex items-center">
          <img className="w-8 cursor-pointer" src={heart} alt="" onClick={handleNavigate} />
          <span className="absolute -top-3 -right-2 bg-theme-orange text-white rounded-full text-xs px-1">
            {wishedListItems?.length}
          </span>
        </div>
        <div className="relative flex items-center">
          <img className="w-8 cursor-pointer" src={bag} alt="" onClick={handleNavigate} />
          <span className="absolute -top-3 -right-2 bg-theme-orange text-white rounded-full text-xs px-1">
            {cartItems?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
