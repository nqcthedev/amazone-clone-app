import { Link, useHistory } from "react-router-dom";

import LogoLogin from "../../assets/images/Login.png";
import React from "react";
import { auth } from "../../firebase/firebase";
import { useState } from "react";

function Login() {
  const history = useHistory();
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordlIsValid, setPasswordIsValid] = useState(true);

  const emailInputChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordInputChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const signInHandler = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(enteredEmail, enteredPassword)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    if (enteredEmail.trim() === "" || enteredPassword.trim() === "") {
      setEmailIsValid(false);
      setPasswordIsValid(false);
      return;
    }

    setEmailIsValid(true);
    setPasswordIsValid(true);
    setEmail("");
    setPassword("");
  };

  const RegisterHandler = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(enteredEmail, enteredPassword)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    if (enteredEmail.trim() === "" || enteredPassword.trim() === "") {
      setEmailIsValid(false);
      setPasswordIsValid(false);
      return;
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex bg-white h-screen items-center flex-col w-full">
      <Link to="/">
        <img
          className="my-5 object-contain w-100 mx-auto"
          src={LogoLogin}
          alt="LogoAmazon"
        />
      </Link>
      <div className="w-96 h-auto flex flex-col rounded border-solid border-2 border-light-gray-300 p-5">
        <h1 className="text-3xl font-medium mb-5">Sign-up</h1>

        <form>
          <label htmlFor="email" className="mb-2 text-lg font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            required
            className="h-8 mb-3 p-2 bg-white w-full border-solid border-2 border-light-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            value={enteredEmail}
            onChange={emailInputChangeHandler}
          />
          {!emailIsValid && (
            <p className="text-red-500">Email must not be empty !</p>
          )}
          <label htmlFor="password" className="mb-2 text-lg font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            className="h-8 mb-3 p-2 bg-white w-full border-solid border-2 border-light-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            value={enteredPassword}
            onChange={passwordInputChangeHandler}
          />
          {!passwordlIsValid && (
            <p className="text-red-500">Password must not be empty !</p>
          )}
          <button
            type="submit"
            className="button w-full mt-4"
            onClick={signInHandler}
          >
            Sign in
          </button>

          <p className="text-sm my-4 ">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>

          <button className="button w-full" onClick={RegisterHandler}>
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
