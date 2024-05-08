import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromWishlist } from "../store/cartReducer";

const WishListLayout = () => {
  const { wishedListItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    const payload = { ...product, quantity: 1 };
    dispatch(addToCart(payload));
  };
  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };
  return (
    <div className="flex-1 rounded-lg mt-8">
      <div className="text-lg border-b font-bold p-4">My Wish List</div>
      <div className="flex flex-wrap gap-4 mt-4">
        {wishedListItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 justify-between py-2 border rounded-lg w-[32%]"
          >
            <div className="flex flex-col items-center w-[50%]">
              <img src={item.image} alt="" className="w-full" />
            </div>
            <div className="flex-1 flex flex-col py-4">
              <span className="text-2xl font-bold">{item.name}</span>
              <span className="text-md font-semibold text-light-text mt-2">
                seller : Anon pvt. ltd
              </span>
              <div className="flex items-start gap-3 mt-4">
                <span className="text-2xl font-bold">{`$${item.price}`}</span>
                <span className="line-through">{`$${item.mrp}`}</span>
              </div>
              <div className="flex gap-8 mt-4">
                <button
                  className="text-green-600"
                  onClick={() => handleAddToCart(item)}
                >
                  Add To Cart
                </button>
                <button
                  className="text-red-600"
                  onClick={() => handleRemoveFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishListLayout;
