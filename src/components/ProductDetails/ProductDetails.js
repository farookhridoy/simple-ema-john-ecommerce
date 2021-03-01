import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
const ProductDetails = () => {
  const { key } = useParams();
  const product = fakeData.find((pd) => pd.key === key);
  console.log(product);
  return (
    <div>
      <h1> {key} This is Proudct Details page</h1>
      <Product product={product} key={product.key}></Product>
    </div>
  );
};

export default ProductDetails;
