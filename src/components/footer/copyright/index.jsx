import copyright from "../../../assets/copyright.png";

const Copyright = () => {
  return (
    <div className="px-24 py-8 flex flex-col items-center">
      <img src={copyright} alt="" />
      <span className="text-lg font-bold text-gray-500 mt-4">Copyright © Anon All Rights Reserved.</span>
    </div>
  );
};

export default Copyright;
