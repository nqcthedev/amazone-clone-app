import HeaderBottom from "./HeaderBottom";
import HeaderCart from "./HeaderCart";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { auth } from "../../firebase/firebase";
import { selectUser } from "../../store/user-slice";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector(selectUser);

  const handleAuthClick = () => {
    if (user) auth.signOut();
  };

  return (
    <header className="sticky top-0 z-50">
      {/* TOP NAV */}
      <div className="flex items-center bg-amazon_blue p-1  flex-grow py-2">
        <Link to="/">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 px-3">
            <img
              className="w-150 h-10 object-contain cursor-pointer"
              src={Logo}
              alt="logo"
            />
          </div>
        </Link>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <Link to={!user && "/login"} className="link">
            <div onClick={handleAuthClick}>
              <p>Hello {!user ? "Guest" : user.email}</p>
              <p className="font-extrabold md:text-sm">
                {user ? "Sign Out" : "Sign In"}
              </p>
            </div>
          </Link>
          <Link to="/orders">
            <div className="link">
              <p>Return</p>
              <p className="font-extrabold md:text-sm">& Order</p>
            </div>
          </Link>
          <HeaderCart />
        </div>
      </div>
      {/* BOTTOM NAV */}

      <HeaderBottom />
    </header>
  );
}

export default Header;
