import React from "react";

const Order = () => {
  const cartData = JSON.parse(localStorage.getItem("cartData"));
  const checkoutData = JSON.parse(localStorage.getItem("checkoutData"));
  console.log(cartData);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Price</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.title} height="100px" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1 className="text-center">
            <strong>Thanks For Order {checkoutData.username}</strong>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Order;
