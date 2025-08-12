import React from "react";
import { Link } from "react-router-dom";
import img_collection from "../../../assets/images/img_collection.jpg";
import img_collection2 from "../../../assets/images/img_collection2.webp";
import img_collection3 from "../../../assets/images/img_collection3.webp";
export const SectionOurCategories = () => {
  return (
    <section className="mt-8 lg:mt-24">
      <div className="container">
        <div className="lg:flex justify-between items-center">
          <h2 className="text-3xl font-bold">Our Categories</h2>
          <Link
            to={"/"}
            className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>

        <ul className="mt-10 md:grid grid-cols-3 gap-10 cursor-pointer">
          <li>
            <div className="rounded-[20px] overflow-hidden relative group">
              <img className="image" src={img_collection} alt="" />
              <Link
                to={"/"}
                className="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
              >
                Living Room
              </Link>
            </div>
          </li>
          <li className="mt-6 md:mt-0">
            <div className="rounded-[20px] overflow-hidden relative group">
              <img className="image" src={img_collection2} alt="" />
              <Link
                to={"/"}
                className="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
              >
                Lamp
              </Link>
            </div>
          </li>
          <li className="mt-6 md:mt-0">
            <div className="rounded-[20px] overflow-hidden relative group">
              <img className="image" src={img_collection3} alt="" />
              <Link
                to={"/"}
                className="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
              >
                Deco
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
