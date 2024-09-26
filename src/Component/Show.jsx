import React, { useEffect, useState } from "react";
import axios from "./axios";

export default function Show() {
  const [products, setProducts] = useState([]);
  const style = "w-full m-5 text-xl font-bold";
  const getProduct = () => {
    const api = "/products";
    axios
      .get(api)
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <hr className="mt-1" />
      <ul>
        {products.length > 0 ? (
          products.map((item, index) => (
            <li className={style} key={index}>
              Product Name : {item.title}
            </li>
          ))
        ) : (
          <h1>Loading ......</h1>
        )}
      </ul>
    </>
  );
}
