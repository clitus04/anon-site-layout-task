import { useDispatch } from "react-redux";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../../cart/store/cartReducer";
import rating from "../../../../assets/icons/5-star-rating.png";
import heartIcon from "../../../../assets/icons/heart.svg";
import heartFilledIcon from "../../../../assets/icons/heart-filled.svg";
import { isLiked } from "../../../../utilities/likedChecker";

const ProductTemplate = ({ id, image, name, description, mrp, price }) => {
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
    <div className="flex flex-col w-[23%] border my-2 p-4 rounded-md">
      <img className="w-full" src={image} alt={name} />
      <span className="text-md text-pink-400">{name}</span>
      <p className="text-lg font-thin text-gray-400">{description}</p>
      <div className="flex justify-between">
        <img className="w-20" src={rating} alt="" />
        {isLiked(id) ? (
          <img
            className="w-6 cursor-pointer"
            src={heartFilledIcon}
            alt=""
            onClick={() => handleRemoveFromWishlist(id)}
          />
        ) : (
          <img
            className="w-6 cursor-pointer"
            src={heartIcon}
            alt=""
            onClick={() =>
              handleAddToWishlist({ id, image, name, description, mrp, price })
            }
          />
        )}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-semibold">{`$${price}`}</span>
          <span className="ml-2 line-through text-gray-400">{`$${mrp}`}</span>
        </div>
        <button
          className="bg-theme-pink text-white py-1 px-2 rounded-md"
          onClick={() =>
            handleAddToCart({ id, image, name, description, mrp, price })
          }
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductTemplate;
