import discountBannerImage from "../../../assets/discount-banner.jpg";

const DiscountBanner = () => {
  return (
    <div className="mt-10 relative flex-1">
      <img className="object-cover rounded-lg" src={discountBannerImage} alt="" />
      <div className="absolute w-1/2 h-1/2 top-1/4 left-1/4 flex flex-col justify-center items-center p-8 bg-white opacity-80">
        <span className="bg-black text-white p-2 rounded-md">25% DISCOUNT</span>
        <span className="text-3xl font-bold">Summer</span>
        <span className="text-3xl font-bold">Collection</span>
        <span className="text-lg text-gray-400">Starting @ $10</span>
        <span className="text-lg text-gray-400 font-bold">SHOP NOW</span>
      </div>
    </div>
  );
};

export default DiscountBanner;
