import { selectedItem, selectedTotal } from "../../store/cart-slice";

import Header from "../Layout/Header";
import Order from "../Others/Order";
import React from "react";
import { selectUser } from "../../store/user-slice";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Orders = () => {
  const user = useSelector(selectUser);
  const total = useSelector(selectedTotal);
  const carItems = useSelector(selectedItem);
  const history = useHistory();
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          You Orders
        </h1>
        {user ? (
          <h2>{total} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}
        <div className="mt-5 space-y-4">
          {carItems.map(({ id, totalPrice, image }) => (
            <Order key={id} id={id} totalPrice={totalPrice} image={image} />
          ))}
        </div>
        <button
          onClick={() => history.push("/success")}
          role="link"
          disabled={!user && total}
          className={`button mt-5 w-full ${
            !user &&
            "from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed"
          } ${
            total === 0 &&
            "from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed"
          }`}
        >
          {total === 0 || !user ? "Sign In" : "Processing"}
        </button>
      </main>
    </div>
  );
};

export default Orders;
