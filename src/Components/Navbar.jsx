import { BsFillCartCheckFill } from "react-icons/bs"; 
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const NavList = (
    <>
      <p>categories</p>
      <p>what's New</p>
      <p>Deals</p>
      <p>Delivery</p>
    </>
  );
  const userCart = (
    <div className="flex items-center gap-3">
      <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-xl">Account</button>
      <BsFillCartCheckFill size={40} className="text-blue-500"/>
    </div>
  );
  return (
    <div className="w-full">
      <nav class="bg-gray-800 lg:p-4 p-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <a href="#!" className="flex items-center mb-4 sm:mb-0">
              <img src={""} className="h-8 mr-3" alt=" Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Mansir
              </span>
            </a>
          </div>
          {/* <div className="flex "> */}

          <div className="hidden lg:flex gap-5 text-white capitalize font-bold">
            {NavList}
          </div>
          <div className="hidden lg:flex">
            <button type="button">{userCart}</button>
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
                  {NavList} <button type="button">{userCart}</button>
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
