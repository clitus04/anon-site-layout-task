import { seasonalData } from "./mock.data";
import Template from "./template";

const SeasonalCategories = () => {
  return (
    <div className="flex gap-6 justify-between">
      <Template title="New Arrivals" data={seasonalData} />
      <Template title="Trending" data={seasonalData} />
      <Template title="Top Rated" data={seasonalData} />
    </div>
  );
};

export default SeasonalCategories;
