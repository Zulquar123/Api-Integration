import React, { useState } from "react";
import axios from "axios";

export default function Show() {
  const [products, setProducts] = useState([]);
  const style = "w-full m-5 text-xl font-bold";
  const getProduct = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <button className="m-5 border-2 border-black p-3" onClick={getProduct}>
        Click me to Get Product
      </button>
      <hr className="mt-1" />
      <ul>
        {products.length > 0 ? (
          products.map((item, index) => (
            <li className={style} key={index}>
              Product Name : {item.title}
            </li>
          ))
        ) : (
          <h1>Loading ....</h1>
        )}
      </ul>
    </>
  );
}
