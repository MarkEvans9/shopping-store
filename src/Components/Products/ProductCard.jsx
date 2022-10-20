import React from "react";
import "./Products.css";
import { addItem } from "../../state/action/index";
import { useDispatch } from "react-redux";

const ProductCard = ({ data, name }) => {
  const dispatch = useDispatch();
  return (
    <div className="product-Card">
      <img src={data.image} alt="product-image" />
      <h3>
        {data.title} {"             "}
        <small>({data.category})</small>
      </h3>

      <h4> Price: {data.price}</h4>
      <button onClick={() => dispatch(addItem({ data }))}>{name}</button>
    </div>
  );
};

export default ProductCard;
