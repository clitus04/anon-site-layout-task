import banner from "../../../assets/banner-1.jpg";

const Banner = () => {
  return (
    <div className="relative px-24">
      <img
        className="rounded-lg"
        style={{ height: "70vh", width: "100%" }}
        src={banner}
        alt=""
      />
      <div className="absolute top-0 h-full p-32 ">
        <div className="text-3xl text-pink-400">Trending Accessories</div>
        <div className="font-bold text-4xl w-20 my-2">MODERN SUNGLASSES</div>
        <div className="text-2xl text-gray-500 font-semibold">
          starting at $<span className="font-bold text-3xl">15</span>.00
        </div>
        <button className="bg-pink-400 text-white font-semibold px-4 py-1 rounded-md mt-4">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Banner;
