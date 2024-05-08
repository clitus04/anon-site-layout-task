import ProductTemplate from "./productTemplate";
import { products } from "./mock.data";

const NewProducts = () => {
  return (
    <div className="mt-8">
      <div className="text-lg font-bold border-b py-4">New Products</div>
      <div className="flex flex-wrap justify-between gap-2 mt-8">
        {products.map((item) => (
          <ProductTemplate {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
