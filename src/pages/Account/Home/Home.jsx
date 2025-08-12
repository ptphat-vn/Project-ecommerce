import React from "react";
import { SectionHero } from "./SectionHero";
import { SectionService } from "./SectionService";
import { SectionOurCategories } from "./SectionOurCategories";
import { SectionBestSeller } from "./SectionBestSeller";
import { SectionFeaturedCategory } from "./SectionFeaturedCategory";
import { SectionBannerExperience } from "./SectionBannerExperience";
import { SectionNewArrivals } from "./SectionNewArrivals";

export const Home = () => {
  return (
    <>
      <SectionHero />
      <SectionService />
      <SectionOurCategories />
      <SectionBestSeller />
      <SectionFeaturedCategory />
      <SectionBannerExperience />
      <SectionNewArrivals />
    </>
  );
};
