import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      console.log(res);
      setProducts(res);
      //   .then((res) => res.json())
      //     .then((json) => console.log(json));
    };
    fetchData();
  }, []);

  return (
    <div className="ProductsContainer">
      {products.map((p) => (
        <ProductCard key={p.id} data={p} name={"Add To Cart"} />
      ))}
    </div>
  );
};

export default Products;
