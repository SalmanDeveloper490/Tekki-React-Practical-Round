import React from "react";
import { Link } from "react-router-dom";
import { cartState } from "../context/Context";

const Cart = () => {
  const {
    state: { cart },
  } = cartState();

  console.log("cart", cart);
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          {cart.length > 0
            ? cart.map((item) => (
                <>
                  <div className="card my-2" key={item.id}>
                    <div className="card-body">
                      <img src={item.image} alt={item.title} height="200px" />
                      <h1>{item.title}</h1>
                      <p>Price: ${item.price}</p>
                    </div>
                  </div>
                </>
              ))
            : "No Items in Cart Now"}
          {cart.length > 0 && (
            <Link to="/checkout" className="btn btn-primary">
              Checkout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
