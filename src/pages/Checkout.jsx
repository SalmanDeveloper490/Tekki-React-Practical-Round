import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartState } from "../context/Context";

const Checkout = () => {
  const {
    state: { cart },
  } = cartState();

  let navigate = useNavigate();

  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [city, setCity] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [address, setAddress] = useState("");

  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      inputValues.username == "" &&
      inputValues.email == "" &&
      inputValues.phone == "" &&
      inputValues.country == "" &&
      inputValues.city == "" &&
      inputValues.address == ""
    ) {
      alert("All Fields Are Required");
    }
    localStorage.setItem("checkoutData", JSON.stringify(inputValues));
    localStorage.setItem("cartData", JSON.stringify(cart));
    navigate("/order");
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={inputValues.username}
              name="username"
              //   onChange={(e) => setUsername(e.target.username)}
              onChange={(e) => handleInputChange(e)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={inputValues.email}
              name="email"
              //   onChange={(e) => setEmail(e.target.email)}
              onChange={(e) => handleInputChange(e)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              value={inputValues.phone}
              name="phone"
              //   onChange={(e) => setPhone(e.target.phone)}
              onChange={(e) => handleInputChange(e)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              value={inputValues.country}
              name="country"
              //   onChange={(e) => setCountry(e.target.country)}
              onChange={(e) => handleInputChange(e)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              value={inputValues.city}
              name="city"
              //   onChange={(e) => setCity(e.target.city)}
              onChange={(e) => handleInputChange(e)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              value={inputValues.address}
              name="address"
              //   onChange={(e) => setAddress(e.target.address)}
              onChange={(e) => handleInputChange(e)}
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
