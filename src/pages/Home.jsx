import axios from "axios";
import React, { useEffect, useState } from "react";
import SingelProduct from "../components/SingelProduct";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
      setProduct(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="conatiner py-5">
      <SingelProduct product={product} setProduct={setProduct} />
    </div>
  );
};

export default Home;
