const Navbar = () => {
  return (
    <div className="px-24 py-4">
      <ul className="flex gap-12 justify-center items-center">
        <li className="cursor-pointer font-semibold">HOME</li>
        <li className="cursor-pointer font-semibold">CATEGORIES</li>
        <li className="cursor-pointer font-semibold">MEN'S</li>
        <li className="cursor-pointer font-semibold">WOMEN'S</li>
        <li className="cursor-pointer font-semibold">JWELERY</li>
        <li className="cursor-pointer font-semibold">PERFUME</li>
        <li className="cursor-pointer font-semibold">BLOG</li>
        <li className="cursor-pointer font-semibold text">HOT OFFERS</li>
      </ul>
    </div>
  );
};

export default Navbar;
