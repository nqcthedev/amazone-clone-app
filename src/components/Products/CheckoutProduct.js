import { addItemToCart, removeItemFromCart } from "../../store/cart-slice";

import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import prime from "../../assets/images/prime.png";
import { useDispatch } from "react-redux";

function CheckoutProduct({
  id,
  title,
  price,
  totalPrice,
  description,
  rating,
  category,
  quantity,
  image,
  hasPrice,
}) {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    const product = {
      id,
      title,
      price,
      totalPrice,
      description,
      rating,
      category,
      image,
      hasPrice,
    };
    dispatch(addItemToCart(product));
  };

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className="grid grid-cols-5">
      <img src={image} alt="product" className="h-200 w-200 object-contain" />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p className="font-medium">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <span className="font-medium">$ {totalPrice?.toFixed(2)}</span>

        {hasPrice && (
          <div className="flex items-center space-x-2 mt-2">
            <img loading="lazy" className="w-12" src={prime} alt="prime" />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
        <div className="flex mt-2 items-center space-x-2">
          <button
            className="button font-extrabold lg:text-xl"
            onClick={addItemHandler}
          >
            +
          </button>
          <div className=" w-20 rounded-lg border-solid border-2 border-gray-400 text-center p-2">
            <span className="font-bold">x{quantity}</span>
          </div>
          <button
            className="button font-extrabold  lg:text-xl"
            onClick={removeItemHandler}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
