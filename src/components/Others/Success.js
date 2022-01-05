import { CheckCircleIcon } from "@heroicons/react/outline";
import Header from "../Layout/Header";
import React from "react";
import { selectUser } from "../../store/user-slice";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Success = () => {
  const history = useHistory();
  const user = useSelector(selectUser);
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <div className="flex items-center">
          <CheckCircleIcon className="w-10 h-10 rounded-full bg-green-500" />
          <h1 className="ml-5 text-4xl font-semibold ">
            Thank you,your order has been confirmed
          </h1>
        </div>
        <div className="mt-5 font-medium">
          <h5>
            Thank you for shopping with us. We'll send a confirmation once your{" "}
            item has shipped, if you would like to check the status of your
            order(s) please press the link below.
          </h5>
        </div>
        <button
          onClick={() => history.push("/orders")}
          role="link"
          disabled={!user}
          className={`button mt-5 w-full ${
            !user &&
            "from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed"
          }`}
        >
          {!user ? "Sign In" : "Go to my orders"}
        </button>
      </main>
    </div>
  );
};

export default Success;
