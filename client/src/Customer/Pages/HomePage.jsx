import React from "react";
import MainCarousel from "../Component/Carousel/MainCarousel";
import ProductCarousel from "../Component/Carousel/ProductCarousel";
import Footer from "../Component/Footer";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className=" space-y-10 py-20 ">
        <ProductCarousel title={"Men's Kurtas"} />
        <ProductCarousel title={"Men's Kurtas"} />
        <ProductCarousel title={"Men's Kurtas"} />
        <ProductCarousel title={"Men's Kurtas"} />
        <ProductCarousel title={"Men's Kurtas"} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
