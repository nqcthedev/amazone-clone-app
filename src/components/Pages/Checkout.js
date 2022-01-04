import { selectedItem, selectedTotal } from "../../store/cart-slice";

import CheckoutProduct from "../Products/CheckoutProduct";
import Header from "../Layout/Header";
import React from "react";
import checkout from "../../assets/images/Prime-day-banner.png";
import { selectUser } from "../../store/user-slice";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

function Checkout() {
  const cartItems = useSelector(selectedItem);
  const total = useSelector(selectedTotal);
  const user = useSelector(selectUser);
  const history = useHistory();

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <img
            className="w-full h-[250px] object-contain mb-5"
            src={checkout}
            alt="Banner primer"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h3 className="font-medium">Hello {user?.email}</h3>
            <h1 className="text-3xl border-b pb-4">
              {cartItems.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Cart"}
            </h1>

            {cartItems.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                image={item.image}
                hasPrice={item.hasPrice}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {cartItems.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal({cartItems.length} items):
                <span className="font-bold">${total}</span>
              </h2>

              <button
                onClick={() => history.push("/payment")}
                role="link"
                disabled={!user}
                className={`button mt-2 ${
                  !user &&
                  "from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!user ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
