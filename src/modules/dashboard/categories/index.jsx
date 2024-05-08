import { categoriesData } from "./mock.data";

const Categories = () => {
  return (
    <div className="flex gap-8 justify-between px-24 py-12">
      {categoriesData.map((item) => (
        <div key={item.id} className="flex flex-1 gap-2 border p-4 rounded-lg">
          <div className="p-3 bg-slate-300 flex justify-center items-center rounded-md border border-slate-400">
            <img className="w-8" src={item.icon} alt="" />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <span className="font-bold">{item.title}</span>
            <span className="text-sm text-theme-pink font-semibold cursor-pointer">Show All</span>
          </div>
          <div className="text-light-text">{`(${item.count})`}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
