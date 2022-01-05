import { useEffect, useState } from "react";

import Header from "../Layout/Header";
import ProductDetailItem from "../ProductDetaiItem";
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorHttp, setErrorHttp] = useState(null);
  const { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    const fetchDataDetail = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      const loaded = [responseData];
      setProductDetail(loaded);
      setIsLoading(false);
    };
    fetchDataDetail().catch((error) => {
      setIsLoading(false);
      setErrorHttp(error.message);
    });
  }, [productId]);

  if (isLoading) {
    return (
      <section className="text-center">
        <p className="font-extrabold">Is Loadingg....</p>
      </section>
    );
  }
  if (errorHttp) {
    return (
      <section className="text-center">
        <p className="font-extrabold">Faild to fetch</p>
      </section>
    );
  }

  return (
    <>
      <Header />
      <ProductDetailItem productDetail={productDetail} />
    </>
  );
};

export default ProductDetail;
