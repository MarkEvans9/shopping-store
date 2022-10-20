import React from "react";
import Products from "../Components/Products/Products";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px 0", margin: "20px 0" }}>
      <h2 style={{ margin: "20px 0", fontSize: "33px " }}>
        Welcome to Our Store
      </h2>
      <h4 style={{ margin: "15px 0", fontSize: "25px" }}>Products</h4>
      <Products />
    </div>
  );
};

export default Home;
