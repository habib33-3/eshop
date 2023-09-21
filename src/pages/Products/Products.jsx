import { useLoaderData } from "react-router-dom";
import ProductsCart from "./ProductsCart";

const Products = () => {
  const { products } = useLoaderData();

  return (
    <div>
      <div className="container my-10 mx-auto grid grid-cols-3 gap-5 justify-center items-center">
        {products?.map((product) => (
          <ProductsCart
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
