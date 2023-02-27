import React from "react";
import { cartState } from "../context/Context";

const SingelProduct = ({ product }) => {
  console.log(product);
  const {
    state: { cart },
    dispatch,
  } = cartState();
  return (
    <>
      <div className="row">
        {product.map((product) => (
          <div className="col-md-3 m-2" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title} ${product.price}
                </h5>
                <p className="card-text">{product.description}</p>

                <button
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: product,
                    })
                  }
                  className="btn btn-primary"
                >
                  Add to Cart
                </button>

                {cart.some((p) =>
                  p.id === product.id ? (
                    <button
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product,
                        })
                      }
                      className="btn btn-danger"
                    >
                      Remove From Cart
                    </button>
                  ) : (
                    <button
                      disabled={cart.some(
                        (cartItem) => cartItem.id === product.id
                      )}
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: product,
                        })
                      }
                      className="btn btn-primary"
                    >
                      Add to Cart
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingelProduct;
