import { services } from "./mock.data";

const Services = () => {
  return (
    <div>
      <div className="text-lg font-bold border-b py-3 mb-4">Our Services</div>
      <div className="border px-4 rounded-lg">
        {services.map((item) => (
          <div key={item.key} className="flex gap-4 my-5">
            <img className="w-10" src={item.icon} alt="" />
            <div className="flex flex-col">
              <span className="font-semibold text-lg">{item.name}</span>
              <span className="text-gray-500">{item.summary}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
