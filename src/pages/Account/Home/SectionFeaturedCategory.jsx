import React from "react";
import { Link } from "react-router-dom";
import bathroom from "../../../assets/images/img_category.webp";
import chair from "../../../assets/images/img_category2.webp";
import decor from "../../../assets/images/img_category3.webp";
import lamp from "../../../assets/images/img_category4.webp";
export const SectionFeaturedCategory = () => {
  return (
    <section className="mt-9 lg:mt-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">Our Categories</h2>

        <ul className="md:grid grid-cols-4 gap-10 mt-11">
          <li className="mt-6 md:mt-0">
            <Link to={"/"}>
              <div className="rounded-lg overflow-hidden">
                <img className="image" src={bathroom} alt="" />
              </div>
              <h3 className="mt-4 font-semibold">Bathroom</h3>
            </Link>
          </li>
          <li className="mt-6 md:mt-0">
            <Link to={"/"}>
              <div className="rounded-lg overflow-hidden">
                <img className="image" src={chair} alt="" />
              </div>
              <h3 className="mt-4 font-semibold">Chair</h3>
            </Link>
          </li>
          <li className="mt-6 md:mt-0">
            <Link to={"/"}>
              <div className="rounded-lg overflow-hidden">
                <img className="image" src={decor} alt="" />
              </div>
              <h3 className="mt-4 font-semibold">Decor</h3>
            </Link>
          </li>
          <li className="mt-6 md:mt-0">
            <Link to={"/"}>
              <div className="rounded-lg overflow-hidden">
                <img className="image" src={lamp} alt="" />
              </div>
              <h3 className="mt-4 font-semibold">Lamp</h3>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
