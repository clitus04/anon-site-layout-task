import { useSelector } from "react-redux";

export const isLiked = (id) => {
  const { wishedListItems } = useSelector((state) => state.cart);
  return wishedListItems.some((product) => product.id === id);
};
