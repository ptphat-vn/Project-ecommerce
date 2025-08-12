import React from "react";
import img_experience from "../../../assets/images/img_experience.webp";
import { Link } from "react-router-dom";
export const SectionBannerExperience = () => {
  return (
    <section className="pt-20 pb-20 mt-20 mb-9 lg:mb-20 bg-gray">
      <div className="container">
        <div className="lg:flex items-center justify-between">
          <div className="ml-5">
            <p className="text-[14px] uppercase">EXPERIENCE THE BEST</p>
            <h2 className="text-3xl font-semibold py-5 lg:py-10 leading-[1.4]">
              Tailored Comfort: <br />
              Customized Interior <br />
              Styling
            </h2>
            <Link
              to={"/"}
              className="h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
            >
              View All
            </Link>
          </div>

          <div className="rounded-2xl overflow-hidden mt-6 lg:mt-0">
            <img className="image" src={img_experience} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
