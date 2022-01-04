import React from "react";
import { StarIcon } from "@heroicons/react/outline";
import { addItemToCart } from "../../store/cart-slice";
import primer from "../../assets/images/prime.png";
import { useDispatch } from "react-redux";
import { useState } from "react";

const MAX_RATING = 5;
const MIN_RATING = 1;

function ProductItem({ id, title, description, category, price, image }) {
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
      hasPrice,
    };
    dispatch(addItemToCart(product));
  };

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrice] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <img
        className="w-full h-200 object-contain text-center"
        src={image}
        alt="Images Product"
      />
      <h4 className="my-3 font-medium">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <p className="font-medium">{`$ ${price}`}</p>
      </div>
      {hasPrice && (
        <div className="flex items-center space-x-2 mb-3">
          <img className="w-12" src={primer} alt="Primer" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button font-medium" onClick={addToCartHandler}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
