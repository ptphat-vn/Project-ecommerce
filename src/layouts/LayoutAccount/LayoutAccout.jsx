import React from "react";
import { Navbar } from "../../assets/images/Navbar";
import { Footer } from "../../components/Footer/Footer";

export const LayoutAccout = ({ children }) => {
  return (
    <div className="wrap">
      <header className="py-5 lg:py-8 sticky top-0 z-10 bg-white shadow-lg">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className="bg-gray-100 py-12">
        <Footer />
      </footer>
    </div>
  );
};
