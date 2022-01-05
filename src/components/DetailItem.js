import React from "react";
import { StarIcon } from "@heroicons/react/outline";
import { addItemToCart } from "../store/cart-slice";
import { useDispatch } from "react-redux";

const DetailItem = ({
  id,
  title,
  description,
  price,
  category,
  image,
  rating,
}) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    const product = {
      id,
      title,
      description,
      category,
      price,
      rating,
      image,
    };
    dispatch(addItemToCart(product));
  };
  return (
    <div>
      <div className=" bg-gray-300 h-32">
        <div className=" max-w-screen-2xl mx-auto ">
          <div className="flex p-8 space-x-2">
            <h2 className="font-bold">Home/Product/</h2>
            <h2 className="font-bold text-yellow-500">{title}</h2>
          </div>
        </div>
      </div>
      <div className="flex max-w-screen-xl mx-auto mt-5 gap-7 items-center p-5">
        <div className="flex-1  md:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="text-center">
            <img src={image} alt="image" className="w-96" />
          </div>
        </div>
        <div className="flex-1 md:flex md:flex-col lg:grid-cols-3 xl:grid-cols-4 space-y-5">
          <p className="font-medium">{category}</p>
          <h1 className="text-3xl font-bold text-yellow-300">{title}</h1>
          <p className="font-light whitespace-normal truncate">{description}</p>
          <div className="flex items-center space-x-2">
            <p className="font-medium text-xl">Rating:</p>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))}
          </div>
          <p className="font-medium">Company:liddy</p>
          <p className="font-medium">Stock:Stock out!</p>
          <p className="font-bold text-xl text-yellow-400">
            ${price.toFixed(2)}
          </p>
          <button className="button" onClick={addToCartHandler}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
