import React from "react";
import Product from "./Product";
import productsData from "../productsData.json";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        {productsData.map((data) => (
          <Product key={data.title + Math.random() * 100} productsData={data} />
        ))}
      </div>
    );
  }
}

export default ProductList;
