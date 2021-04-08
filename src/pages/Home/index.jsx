import React from "react";
import Navbar from "../../navbar/Navbar";
import Hero from "../../herosection/Hero";
import Bestoffer from "../../Bestoffer/index";
import Brandlogo from "../../components/Brandlogo";
import Footer from "../../footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="flex items-center justify-center w-full mt-56">
        <Bestoffer />
      </div>
      {/*
      <div className="container -xl mx-auto my-16">
        <div className="flex items-center justtify-between wrap space-x-4">
          {offers.map((offer) => (
            <OfferCardItem key={offer.id} offer={offer} />
          ))}
        </div>
          
      </div>
      */}
      <Brandlogo />
      <Footer />
    </>
  );
};
export default Home;
