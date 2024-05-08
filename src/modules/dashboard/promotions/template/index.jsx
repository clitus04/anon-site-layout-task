const Template = ({ image, title, category, by, date }) => (
  <div>
    <img className="rounded-md mb-4" src={image} alt="" />
    <span className="text-pink-400">{category}</span>
    <div className="text-xl font-bold">{title}</div>
    <div className="mt-2 text-gray-500">{`By ${by} / ${date}`}</div>
  </div>
);

export default Template;
