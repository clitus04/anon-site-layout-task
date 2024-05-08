import { bestSellers } from "./mock.data";
import rating from "../../../assets/icons/5-star-rating.png";

const BestSeller = () => {
  return (
    <div className="mt-10">
      <div className="text-xl font-bold mb-2">BEST SELLER</div>
      {bestSellers.map((item) => (
        <div key={item.id} className="flex my-3">
          <img className="w-[74px]" src={item.image} alt="" />
          <div className="ml-4">
            <span className="text-sm text-gray-500">{item.name}</span>
            <img className="w-[64px]" src={rating} alt="" />
            <div className="flex items-center gap-2">
              <span className="text-xs line-through text-gray-500">{item.mrp}</span>
              <span className="text-sm font-semibold">{item.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSeller;
