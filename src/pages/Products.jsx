import React from "react";
import ProductContainer from "../components/productComponents/ProductContainer";

const Products = () => {
  return (
    <div className="py-5 px-5 md:px-10 w-full bg-container flex flex-col items-start gap-4 rounded-xl">
      <ProductContainer />
    </div>
  );
};

export default Products;
