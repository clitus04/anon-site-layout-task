import React from "react";
import Topbar from "../../components/topbar";
import Header from "../../components/header";
import Navbar from "./navbar";
import Banner from "./banner";
import Categories from "./categories";
import AllCategories from "./allCategories";
import BestSeller from "./bestSeller";
import SeasonalCategories from "./seasonalCategories";
import DealOfTheDay from "./dealOfTheDay";
import NewProducts from "./newProducts";
import Testimonials from "./testimonials";
import DiscountBanner from "./discountBanner";
import Services from "./services";
import Promotions from "./promotions";
import Footer from "../../components/footer";

const Dashboard = () => {
  return (
    <div className="no-scrollbar">
      <Topbar />
      <Header />
      <Navbar />
      <Banner />
      <Categories />
      <div className="flex gap-10 justify-between px-24">
        <div className="w-[23%]">
          <AllCategories />
          <BestSeller />
        </div>
        <div className="flex-1 max-h-screen overflow-y-auto no-scrollbar">
          <SeasonalCategories />
          <DealOfTheDay />
          <NewProducts />
        </div>
      </div>
      <div className="flex gap-4 justify-between px-24 mt-8">
        <div className="w-1/4">
          <Testimonials />
        </div>
        <DiscountBanner />
        <div className="w-1/4">
          <Services />
        </div>
      </div>
      <Promotions />
      <Footer />
    </div>
  );
};

export default Dashboard;
