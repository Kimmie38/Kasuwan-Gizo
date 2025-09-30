import React from "react";
import Link from "next/link";
import Navbar from "./components/Nav/page";
import Hero from "./components/Hero/page";
import WhyChooseUs from "./components/WhyChooseUs/page";
import HowItWorks from "./components/HowItWorks/page";
import SubscriptionPage from "./Subscription/page";
import Footer from "./components/Footer/page";
const Landing = () => {
  return (
    <main>
      <Navbar />
      <Hero/>
      <WhyChooseUs/>
      <HowItWorks/>
      <SubscriptionPage/>
      <Footer/>
    </main>
  );
};

export default Landing;
