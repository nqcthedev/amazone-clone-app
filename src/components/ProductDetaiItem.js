import DetailItem from "./DetailItem";
import React from "react";
import balo from "../assets/images/balo1.jpg";

const ProductDetailItem = ({ productDetail }) => {
  return (
    <div className="">
      {productDetail?.map(
        ({ id, description, category, image, title, price, rating }) => (
          <DetailItem
            key={id}
            id={id}
            price={price}
            title={title}
            category={category}
            rating={rating}
            description={description}
            image={image}
          />
        )
      )}
    </div>
  );
};

export default ProductDetailItem;
