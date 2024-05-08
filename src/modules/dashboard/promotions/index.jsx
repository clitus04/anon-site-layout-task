import { promotions } from "./mock.data";
import Template from "./template";

const Promotions = () => {
  return (
    <div className="px-24 mt-8 flex justify-between gap-8">
      {promotions.map((item) => (
        <Template {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Promotions;
