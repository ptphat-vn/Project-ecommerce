import React, { useState } from "react";
import { Link } from "react-router-dom";
import useGetListCate from "../../../hooks/useGetListCategory";

export const SectionOurCategories = () => {
  const { data } = useGetListCate({ limit: 10, page: 1 });
  const categories = data?.data || [];
  const [start, setStart] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStart((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStart((prev) => Math.min(prev + 1, categories.length - visibleCount));
  };

  return (
    <section className="mt-8 lg:mt-24">
      <div className="container mx-auto px-4">
        <div className="lg:flex justify-between items-center">
          <h2 className="text-3xl font-bold">Our Categories</h2>
          <Link
            to={"/"}
            className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <button
            onClick={handlePrev}
            disabled={start === 0}
            className="absolute left-[2px] top-1/2 -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100 disabled:opacity-50 z-10"
          >
            <span>&lt;</span>
          </button>
          <div className="overflow-hidden w-full px-4">
            <ul
              className="flex gap-7 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${start * (100 / visibleCount)}%)`,
              }}
            >
              {categories.map((item, index) => (
                <li
                  key={item._id || index}
                  className="w-full md:w-1/3 flex-shrink-0"
                  style={{
                    maxWidth: "calc(100% / 3 - 16px)",
                  }}
                >
                  <div className="rounded-2xl overflow-hidden relative group shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white h-full">
                    <div className="w-full max-w-[300px] mx-auto">
                      <img
                        className="w-full aspect-square object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <Link
                      to={"/"}
                      className="absolute left-1/2 -translate-x-1/2 bottom-6 opacity-90 group-hover:opacity-100 bg-white px-7 py-2 inline-flex items-center font-semibold text-black rounded-full text-[15px] shadow-md hover:bg-black hover:text-white transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleNext}
            disabled={start + visibleCount >= categories.length}
            className="absolute right-[2px] top-1/2 -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100 disabled:opacity-50 z-10"
          >
            <span>&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
};
