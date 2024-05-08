import dealImage from "../../../assets/dealImage.jpg";
import rating from "../../../assets/icons/5-star-rating.png";

const DealOfTheDay = () => {
  return (
    <div className="mt-8">
      <div className="text-lg font-bold border-b py-3">Deal Of The Day</div>
      <div className="flex border mt-8 rounded-lg p-4">
        <img className="w-1/2" src={dealImage} alt="" />
        <div>
          <img className="w-24" src={rating} alt="" />
          <div className="font-bold">SHAMPOO, CONDITIONER & FACEWASH PACKS</div>
          <p className="text-slate-400 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            natus, autem excepturi ipsum accusantium.
          </p>
          <div className="flex gap-4 my-2">
            <span className="text-2xl font-bold text-pink-400">$150.00</span>
            <span className="text-2xl text-slate-400 line-through">
              $200.00
            </span>
          </div>
          <button className="bg-pink-400 text-white rounded-md px-4 py-2">
            ADD TO CART
          </button>
          <div className="flex justify-between items-center my-2">
            <div>
              <span className="text-gray-400 text-md">ALREADY SOLD:</span>
              <span className="font-bold">20</span>
            </div>
            <div>
              <span className="text-gray-400 text-md">AVAILABLE:</span>
              <span className="font-bold">40</span>
            </div>
          </div>
          <div className="h-2 bg-gray-300 rounded-md flex items-center">
            <div className="h-1 w-1/3 bg-pink-400"></div>
          </div>
          <div className="my-2 text-gray-500 font-bold">
            HURRY UP!OFFER ENDS IN:
          </div>
          <div className="flex gap-4">
            <div className="h-16 w-16 flex flex-col items-center justify-between p-2 rounded-md bg-gray-200">
              <span className="text-xl font-semibold">360</span>
              <span className="text-xs">Days</span>
            </div>
            <div className="h-16 w-16 flex flex-col items-center justify-between p-2 rounded-md bg-gray-200">
              <span className="text-xl font-semibold">24</span>
              <span className="text-xs">Hours</span>
            </div>
            <div className="h-16 w-16 flex flex-col items-center justify-between p-2 rounded-md bg-gray-200">
              <span className="text-xl font-semibold">59</span>
              <span className="text-xs">Min</span>
            </div>
            <div className="h-16 w-16 flex flex-col items-center justify-between p-2 rounded-md bg-gray-200">
              <span className="text-xl font-semibold">00</span>
              <span className="text-xs">Sec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
