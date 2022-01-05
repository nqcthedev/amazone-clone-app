import React from "react";
import { selectedTotal } from "../../store/cart-slice";
import { useSelector } from "react-redux";

const Order = ({ id, totalPrice, image }) => {
  const total = useSelector(selectedTotal);
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5  bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACE</p>
          <p>1 January 2021</p>
        </div>
        <div>
          <p className="font-bold text-xs">TOTAL</p>
          <p>${totalPrice?.toFixed(2)}- Next Day Delivery $6.99</p>
        </div>
        <p className="text-sm whitespace-nowrap sm-text-xl self-end flex-1 text-right text-blue-500">
          {total} items
        </p>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          <img
            src={image}
            alt="image"
            className="h-20 object-contain sm:h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
