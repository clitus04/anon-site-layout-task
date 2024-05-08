import Topbar from "../../components/topbar";
import Header from "../../components/header";
import CartLayout from "./cartLayout";
import WishListLayout from "./wishListLayout";

const Cart = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <div className="p-8">
        <CartLayout />
        <WishListLayout />
      </div>
    </div>
  );
};

export default Cart;
