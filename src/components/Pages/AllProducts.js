import { useEffect, useState } from "react";

import Products from "../Products/Products";
import React from "react";

function AllProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      setProducts(responseData);
      setIsLoading(false);
    };
    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="text-center">
        <p className="font-extrabold">Is Loadingg....</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className="text-center">
        <p className="font-extrabold">Faild to fetch</p>
      </section>
    );
  }
  return (
    <>
      <Products products={products} />
    </>
  );
}

export default AllProducts;
