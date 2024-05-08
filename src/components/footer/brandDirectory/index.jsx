import { brands } from "./mock.data";

const BrandDirectory = () => {
  return (
    <div className="px-24 border-b border-dark-border py-8">
      <div className="text-xl text-theme-pink font-bold">BRAND DIRECTORY</div>
      <div>
        {brands.map((item) => (
          <div key={item.id} className="flex my-4 gap-2">
            <span className="text-ash-gray font-semibold">{item.name}:</span>
            <div className="flex gap-2">
              {item.products.map((product) => (
                <div key={product.id}>
                  <span className="text-normal-text font-semibold">{product.name}</span>
                  <span className="text-normal-text font-semibold ml-2">|</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDirectory;
