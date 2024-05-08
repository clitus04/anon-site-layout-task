import { overviewData } from "./mock.data";

const FooterOverview = () => {
  return (
    <div className="px-24 py-8 flex justify-between border-b border-dark-border">
      {overviewData.map((item) => (
        <div key={item.id}>
          <div className="font-bold flex flex-col">
            {item.title}
            <span className="h-[1px] w-12 mt-2 bg-theme-pink"></span>
          </div>
          <ul>
            {item.menu.map((list) => (
              <li key={list.id} className="text-normal-text font-semibold my-2">
                {list.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterOverview;
