import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../store/cartReducer";
import ProductDetail from "./productDetail";

const CartLayout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleIncrementCount = (id) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrementCount = (id) => {
    dispatch(decrementQuantity(id));
  };
  return (
    <div className="flex items-start gap-4">
      <div className="flex-1 border rounded-lg">
        <div className="text-lg border-b font-bold p-4">My Cart</div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 justify-between py-2 border-b"
          >
            <div className="flex flex-col items-center w-[15%]">
              <img src={item.image} alt="" className="w-full" />
              <div className="flex items-center gap-2">
                <button
                  className="py-1 px-2 cursor-pointer rounded-full border font-bold disabled:cursor-not-allowed"
                  onClick={() => handleDecrementCount(item.id)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-3 py-1 border font-semibold">
                  {item.quantity}
                </span>
                <button
                  className="py-1 px-2 cursor-pointer rounded-full border font-bold"
                  onClick={() => handleIncrementCount(item.id)}
                >
                  +
                </button>
              </div>
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
                <button className="text-green-600">Buy</button>
                <button
                  className="text-red-600"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="flex flex-col w-[25%] p-2">
              <span className="text-lg font-bold">
                Delivery by Friday May 10
              </span>
              <span className="text-md text-light-text">
                7 days Replacement Policy
              </span>
            </div>
          </div>
        ))}
      </div>
      <ProductDetail cartItems={cartItems} />
    </div>
  );
};

export default CartLayout;
