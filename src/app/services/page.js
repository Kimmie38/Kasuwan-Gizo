import React from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard/page";
import ProductSection from "./components/ProductSection/page";
import Navsec from "./components/Navsec/page";
import MockProducts from "./components/MockProducts/page";
import Home from "./components/Home/page";
import Cardsection from "./components/Cardsection/page"
const services = () => {
  return (
    <main>
      <Navsec />
      <ProductCard />
      <ProductSection />
      <MockProducts />
      <Home/>
      <Cardsection/>
    </main>
  );
};

export default services;
