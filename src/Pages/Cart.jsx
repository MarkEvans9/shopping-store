import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { removeItem } from "../../state/action/index";
import { removeItem } from "../state/action/index";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartItems);
  console.log(products);
  return (
    <div
      style={{
        backgroundColor: "rgba(80, 80, 80, 0.158)",
        textAlign: "center",
        minHeight: "80vh",
        padding: "20px 0",
      }}
    >
      <h3
        style={{
          marginBottom: "20px",
          fontSize: "30px",
          textDecoration: "underline",
          textDecorationThickness: "1px",
        }}
      >
        Cart
      </h3>

      <div
        className="cartWrapper"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {products.map((item, i) => (
          <div
            className="Cart-product"
            key={item.data.id}
            style={{
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
              margin: "10px 0",
              padding: "20px",
            }}
          >
            <img
              style={{ height: "70px" }}
              src={item.data.image}
              alt="product-image"
            />
            <h3 style={{ width: "400px", textAlign: "start" }}>
              {item.data.title}
            </h3>
            <h4>Price: {item.data.price}</h4>
            <button
              style={{
                padding: " 5px",
                backgroundColor: "rgba(8, 12, 235, 0.884)",
                border: "none",
                fontWeight: "bold",
                borderRadius: "5px",
                margin: "5px 0",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => dispatch(removeItem(i))}
            >
              Remove From Cart
            </button>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Cart;
