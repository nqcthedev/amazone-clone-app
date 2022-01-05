import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  selectedItem,
  selectedPrice,
  selectedTotal,
} from "../../store/cart-slice";

import CheckoutProduct from "../Products/CheckoutProduct";
import Header from "../Layout/Header";
import axios from "axios";
import { selectUser } from "../../store/user-slice";
import { useSelector } from "react-redux";

function Payment() {
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectedItem);
  const total = useSelector(selectedTotal);
  const totalPrice = useSelector(selectedPrice);
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
      });

      setClientSecret(response.data.clientSecret);
    };
  }, [cartItems]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div>
      <Header />

      <h1 className=" text-center p-3 font-medium bg-gray-200 text-3xl border-b-2 border-gray-300">
        Checkout (<Link to="/checkout">{total} items</Link>)
      </h1>
      <div className="flex p-5 my-5 border-b-2 border-gray-300">
        <h3 className="text-xl font-medium">Delivery Address</h3>

        <div className="ml-5">
          <p>{user?.email}</p>
          <p>Learn React</p>
          <p>Bình Dương City</p>
        </div>
      </div>

      <div className="flex p-5 my-5 border-b-2 border-gray-300">
        <h3 className="text-xl font-medium">Review items and delivery</h3>
        <div className="ml-5">
          {cartItems.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              rating={item.rating}
              totalPrice={item.totalPrice}
              quantity={item.quantity}
              price={item.price}
              description={item.description}
              image={item.image}
              hasPrice={item.hasPrice}
            />
          ))}
        </div>
      </div>

      {/* Payment method */}
      <div className="flex p-5 my-5 border-b-2 border-gray-300">
        <h3 className="text-xl font-medium">Payment method</h3>
        <div className="flex-1 ml-5">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className=" bg-white p-10 shadow-md">
              {cartItems.length > 0 && (
                <>
                  <h2 className="whitespace-nowrap font-bold text-lg">
                    Order Total:({total})
                    <span className="font-bold">${totalPrice?.toFixed(2)}</span>
                  </h2>
                </>
              )}

              <button
                onClick={() => history.push("/orders")}
                role="link"
                disabled={!user}
                className={`button mt-2 ${
                  !user &&
                  "from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!user ? "Sign In" : "Buy Now"}
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
