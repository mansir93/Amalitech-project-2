import React, { useState, useContext } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Context } from "../utils/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { cart } = useContext(Context);
  // console.log(cart);
  const NavList = (
    <>
      <Link to="/">categories</Link>
      <Link to="/">what's New</Link>
      <Link to="/">Deals</Link>
      <Link to="/">Delivery</Link>
    </>
  );
  const TopCart = (
    <div className="flex items-center gap-3">
    
      <Link to="/cart" className="relative inline-block">
        <BsFillCartCheckFill size={40} className="text-orange-500" />
        <span className="absolute top-0 right-0 -mt-2 -mr-2 inline-flex items-center justify-center w-6 h-6 text-white bg-orange-500 rounded-full">
          {cart.length}
        </span>
      </Link>
    </div>
  );
  return (
    <div className="w-full">
      <nav className="bg-gray-800 lg:p-4 p-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
              <img src={""} className="h-8 mr-3" alt=" Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Mansir
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex gap-5 text-white capitalize font-bold">
            {NavList}
          </div>
          <div className="hidden lg:flex">
            <div>{TopCart}</div>
          </div>
          <div className="lg:hidden">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            )}
            {toggleMenu && (
              <div className="scale-up-center absolute bg-gray-600 p-4 right-3 top-16 flex flex-col gap-4">
                <div className="text-white capitalize font-bold flex flex-col gap-4">
                  {NavList} <div>{TopCart}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
