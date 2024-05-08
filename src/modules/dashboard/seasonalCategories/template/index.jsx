import { useDispatch } from "react-redux";
import heartIcon from "../../../../assets/icons/heart.svg";
import heartFilledIcon from "../../../../assets/icons/heart-filled.svg";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../../cart/store/cartReducer";
import { isLiked } from "../../../../utilities/likedChecker";

const Template = ({ title, data }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    const payload = { ...product, quantity: 1 };
    dispatch(addToCart(payload));
  };
  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };
  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };
  return (
    <div className="flex-1">
      <div className="font-bold text-lg pb-3 border-b">{title}</div>
      {data.map((item) => (
        <div
          className="flex justify-between p-4 my-4 border rounded-md"
          key={item.id}
        >
          <img className="w-16 object-cover" src={item.image} />
          <div className="flex flex-col">
            <span className="font-bold">{item.name}</span>
            <span className="text-slate-400">{item.type}</span>
            <div>
              <span className="text-pink-400 font-semibold">{`$${item.price}`}</span>
              <span className="text-sm line-through text-slate-400 ml-2">
                {`$${item.mrp}`}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            {isLiked(item.id) ? (
              <img
                className="w-6 cursor-pointer"
                src={heartFilledIcon}
                alt=""
                onClick={() => handleRemoveFromWishlist(item.id)}
              />
            ) : (
              <img
                className="w-6 cursor-pointer"
                src={heartIcon}
                alt=""
                onClick={() => handleAddToWishlist(item)}
              />
            )}
            <button
              className="bg-theme-pink text-white py-1 px-2 rounded-md"
              onClick={() => handleAddToCart(item)}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Template;
