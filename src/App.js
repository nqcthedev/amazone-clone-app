import { Route, Switch } from "react-router-dom";

import AllProducts from "./components/Pages/AllProducts";
import Banner from "./components/Banner";
import Checkout from "./components/Pages/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import Header from "./components/Layout/Header";
import Login from "./components/Pages/Login";
import Payment from "./components/Pages/Payment";
import { auth } from "./firebase/firebase";
import { currentUser } from "./store/user-slice";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const promises = loadStripe(
  "pk_test_51JmIHJHgR3APNvluKUnmLxPbca61Pj2vXC5ocaexxr0VVlIy3fdgZlLuxW1dqszgA6JVogUsJLjSKko8lQjQZ1cB00QzesEi4z"
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(currentUser(authUser));
      } else {
        dispatch(currentUser(null));
      }
    });
  }, [dispatch]);
  return (
    <Switch>
      <Route path="/" exact>
        <Header />
        <main className="max-w-screen-2xl mx-auto">
          <Banner />
          <AllProducts />
        </main>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/payment">
        <Elements stripe={promises}>
          <Payment />
        </Elements>
      </Route>
    </Switch>
  );
}

export default App;
