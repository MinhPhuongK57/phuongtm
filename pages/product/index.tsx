import { NextPage } from "next";
import React from "react";
import CustomHead from "../../components/Head";

type Props = {};

const Product: NextPage = (props: Props) => {
  return (
    <div className="container pt-4">
      <CustomHead title="Product Page" />
      <div className="pt-5">
        <h1>Product</h1>
      </div>
    </div>
  );
};

export default Product;
