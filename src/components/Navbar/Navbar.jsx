import React from "react";
import logo from "../../assets/images/logo.webp";
import ico_search from "../../assets/images/ico_search.png";
import ico_user from "../../assets/images/ico_user.png";
import ico_heart from "../../assets/images/ico_heart.png";
import ico_bag from "../../assets/images/ico_bag.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container flex items-center">
      <h1 className="flex-shrink-0 mr-5">
        <Link className="block max-w-[130px]" to="/">
          <img className="max-w-full" src={logo} alt="Darion" />
        </Link>
      </h1>

      <div className="relative ml-auto lg:mr-20 max-w-[500px] w-full hidden xl:block">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span>
            <img className="size-5" src={ico_search} alt="" />
          </span>
        </div>
      </div>

      <nav className="mr-28 hidden lg:block ml-auto">
        <ul className="flex items-center gap-10">
          <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
            <Link to="/">Home</Link>
          </li>
          <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
            <Link to="/product">Product</Link>
          </li>
          <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
            <Link to="/featured">Featured</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-6 ml-auto lg:ml-0 shrink-0">
        <Link to="/search" className="lg:hidden">
          <img className="size-5" src={ico_search} alt="" />
        </Link>
        <Link to="/login">
          <img className="size-5" src={ico_user} alt="" />
        </Link>
        <Link to="/wishlist" className="relative">
          <span className="absolute -top-[8px] -right-[10px] size-[18px] bg-black text-white rounded-full text-xs grid place-items-center">
            10
          </span>
          <img className="size-5" src={ico_heart} alt="" />
        </Link>
        <Link to="/shopping-cart" className="relative">
          <span className="absolute -top-[8px] -right-[10px] size-[18px] bg-black text-white rounded-full text-xs grid place-items-center">
            3
          </span>
          <img className="size-5" src={ico_bag} alt="" />
        </Link>
      </div>
    </div>
  );
};
