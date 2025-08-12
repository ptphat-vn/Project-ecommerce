import React from "react";
import { Link, useNavigate } from "react-router-dom";

import icoHeart from "../../../assets/images/ico_heart.png";
import icoReload from "../../../assets/images/ico_reload.png";
import icoSearch from "../../../assets/images/ico_search.png";
import imgProduct1 from "../../../assets/images/img_product.webp";
import imgProduct2 from "../../../assets/images/img_product2.webp";
import imgProduct3 from "../../../assets/images/img_product3.webp";
import imgProduct4 from "../../../assets/images/img_product4.webp";
import icoStarActive from "../../../assets/images/ico_star_active.png";
import icoStarGray from "../../../assets/images/ico_star_gray.png";

export const SectionBestSeller = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/shopping-cart");
    alert("Đã thêm vào giỏ hàng!");
  };

  return (
    <section className="mt-9 lg:mt-24 pt-16 pb-8 bg-gray">
      <div className="container">
        <div className="lg:flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold">Bestseller</h2>
            <p className="mt-2 text-lightGray">
              Experience the best products at our store!
            </p>
          </div>
          <Link
            to="/"
            className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>

        <ul className="mt-8 lg:grid grid-cols-4 gap-7">
          <li className="mt-6 md:mt-0 text-center group relative">
            <Link to="/product-detail" className="block bg-red">
              <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
                Out of stock
              </span>
              <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <button
                    type="button"
                    className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                  >
                    <img
                      src={icoHeart}
                      className="image size-4 rounded-full"
                      alt=""
                    />
                  </button>
                </li>
                <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                  <button
                    type="button"
                    className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                  >
                    <img
                      src={icoReload}
                      className="image size-4 rounded-full"
                      alt=""
                    />
                  </button>
                </li>
                <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                  <button
                    type="button"
                    className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                  >
                    <img
                      src={icoSearch}
                      className="image size-4 rounded-full"
                      alt=""
                    />
                  </button>
                </li>
              </ul>
              <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                <img
                  className="block size-full object-cover"
                  src={imgProduct1}
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center gap-1 mt-5">
                <img
                  className="size-13 inline-block"
                  src={icoStarActive}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
              </div>
              <h3 className="text-15 mt-2">Egg Dining Table</h3>
            </Link>
            <div className="mt-2 relative h-5 overflow-hidden">
              <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                <div className="flex items-center justify-center font-bold text-15 text-center">
                  <span>$70.00</span>
                </div>
                <button
                  type="button"
                  className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </li>

          <li className="mt-6 md:mt-0 text-center group relative">
            <Link to="/product-detail" className="block">
              <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <button
                    type="button"
                    className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                  >
                    <img
                      src={icoHeart}
                      className="image size-4 rounded-full"
                      alt=""
                    />
                  </button>
                </li>
                <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                  <button
                    type="button"
                    className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                  >
                    <img
                      src={icoReload}
                      className="image size-4 rounded-full"
                      alt=""
                    />
                  </button>
                </li>
                <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                  <button
                    type="button"
                    className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                  >
                    <img
                      src={icoSearch}
                      className="image size-4 rounded-full"
                      alt=""
                    />
                  </button>
                </li>
              </ul>
              <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                <img
                  className="block size-full object-cover"
                  src={imgProduct2}
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center gap-1 mt-5">
                <img
                  className="size-13 inline-block"
                  src={icoStarActive}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
              </div>
              <h3 className="text-15 mt-2">Century Starburst Clock</h3>
            </Link>
            <div className="mt-2 relative h-5 overflow-hidden">
              <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                <div className="flex items-center justify-center font-bold text-15 text-center">
                  <span>$55.00</span>
                </div>
                <button
                  type="button"
                  className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </li>

          <li className="mt-6 md:mt-0 text-center group relative">
            <Link to="/product-detail" className="block">
              <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                <img
                  className="block size-full object-cover"
                  src={imgProduct3}
                  alt=""
                />
              </div>
              <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <button
                    type="button"
                    className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                  >
                    <img
                      src={icoHeart}
                      className="image size-4 rounded-full"
                      alt=""
                    />
                  </button>
                </li>
                <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                  <button
                    type="button"
                    className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                  >
                    <img
                      src={icoReload}
                      className="image size-4 rounded-full"
                      alt=""
                    />
                  </button>
                </li>
                <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                  <button
                    type="button"
                    className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                  >
                    <img
                      src={icoSearch}
                      className="image size-4 rounded-full"
                      alt=""
                    />
                  </button>
                </li>
              </ul>
              <div className="flex justify-center items-center gap-1 mt-5">
                <img
                  className="size-13 inline-block"
                  src={icoStarActive}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
              </div>
              <h3 className="text-15 mt-2">Bouquet Flower Vase</h3>
            </Link>
            <div className="mt-2 relative h-5 overflow-hidden">
              <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                <div className="flex items-center justify-center font-bold text-15 text-center">
                  <span>$59.00</span> -<span>$60.00</span>
                </div>
                <button
                  type="button"
                  className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </li>

          <li className="mt-6 md:mt-0 text-center group relative">
            <Link to="/product-detail" className="block">
              <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-red-600 text-white rounded-xl">
                -30%
              </span>
              <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <button
                    type="button"
                    className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                  >
                    <img
                      src={icoHeart}
                      className="image size-4 rounded-full"
                      alt=""
                    />
                  </button>
                </li>
                <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                  <button
                    type="button"
                    className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                  >
                    <img
                      src={icoReload}
                      className="image size-4 rounded-full"
                      alt=""
                    />
                  </button>
                </li>
                <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                  <button
                    type="button"
                    className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                  >
                    <img
                      src={icoSearch}
                      className="image size-4 rounded-full"
                      alt=""
                    />
                  </button>
                </li>
              </ul>
              <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                <img
                  className="block size-full object-cover"
                  src={imgProduct4}
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center gap-1 mt-5">
                <img
                  className="size-13 inline-block"
                  src={icoStarActive}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
                <img
                  className="size-13 inline-block"
                  src={icoStarGray}
                  alt=""
                />
              </div>
              <h3 className="text-15 mt-2">Caravaggio Read Wall Light</h3>
            </Link>
            <div className="mt-2 relative h-5 overflow-hidden">
              <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                <div className="flex items-center justify-center font-bold text-15 text-center">
                  <span className="line-through text-lightGray">$59.00 </span> -
                  <span className="text-red-600">$60.00</span>
                </div>
                <button
                  type="button"
                  className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
