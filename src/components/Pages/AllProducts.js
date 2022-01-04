import { useEffect, useState } from "react";

import Products from "../Products/Products";
import React from "react";

function AllProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseData = await response.json();
      const loadedProducts = [];
      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
          price: responseData[key].price,
          category: responseData[key].category,
          image: responseData[key].image,
        });
      }
      setProducts(loadedProducts);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Products products={products} />
    </>
  );
}

export default AllProducts;
