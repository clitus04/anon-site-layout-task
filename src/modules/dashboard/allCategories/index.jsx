import { categories } from "./mock.data";

const AllCategories = () => {
  return (
    <div className="border p-4 rounded-md">
      <div className="text-lg font-bold mb-2">CATEGORY</div>
      {categories.map((item) => (
        <div key={item.id} className="flex justify-between py-1">
          <div className="flex my-1">
            <img className="w-4" src={item.icon} />
            <span className="ml-2 text-normal-text font-semibold">{item.name}</span>
          </div>
          <div className="font-bold">+</div>
        </div>
      ))}
    </div>
  );
};

export default AllCategories;
