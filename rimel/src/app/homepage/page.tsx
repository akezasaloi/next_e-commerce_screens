
"use client";

import Footer from "../shared-components/Footer";
import Header from "../shared-components/Header";
import Category from "./components/categories";
import ExploreProducts from "./components/explore";
import FeaturedBanner from "./components/featured";
import HeroSection from "./components/landing-page";
import NewArrival from "./components/new -arrival";
import Services from "./components/services";
import BestSelling from "./components/this-month";
import FlashSales from "./components/todays-deals";
export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <FlashSales/>
      <Category/>
      <BestSelling/>
      <FeaturedBanner/>
      <ExploreProducts/>
      <NewArrival/>
      <Services/>
      <Footer/>
    </div>
  );
}