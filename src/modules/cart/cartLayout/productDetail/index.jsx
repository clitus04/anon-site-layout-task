import { useMemo } from "react";

const ProductDetail = ({ cartItems }) => {
  const totalPrice = useMemo(
    () => cartItems.reduce((prev, current) => (prev += current.price), 0),
    [cartItems]
  );
  return (
    <div className="w-[25vw]">
      {cartItems.length > 0 ? (
        <div>
          <div className="border rounded-lg">
            <div className="text-lg border-b font-bold p-4">
              Products Detail
            </div>
            <div className="flex justify-between p-4 border-b">
              <span className="font-bold">Total Items:</span>
              <span className="font-bold">{cartItems.length}</span>
            </div>
            <div className="flex justify-between p-4 border-b">
              <span className="font-bold">Delivery Charges:</span>
              <span className="font-bold">$50</span>
            </div>
            <div className="flex justify-between p-4 border-b mt-4">
              <span className="font-bold text-xl">Total Price:</span>
              <span className="font-bold text-xl">{`$${totalPrice}`}</span>
            </div>
          </div>
          <button className="mt-4 w-full text-lg bg-theme-orange text-white p-4 rounded-lg">
            Place Order
          </button>
        </div>
      ) : (
        <div className="h-full w-full flex justify-center items-center p-4 font-semibold border rounded-lg">
          Cart is Empty
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
