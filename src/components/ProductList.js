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
        {productsData.map((data, index) => (
          <Product key={data.title + index} productsData={data} />
        ))}
      </div>
    );
  }
}

export default ProductList;
