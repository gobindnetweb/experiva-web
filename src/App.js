import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.less';
import Navbar from "./navbar/Navbar";
import Hero from "./herosection/Hero";
import ChooseHotalsModal from "./component/ChooseHotalsModal";
import Bestoffer from "./Bestoffer";
import OfferCardItem from "./components/OfferCardItem";
import Brandlogo from "./components/Brandlogo";
import {offers} from './utils/offer-cards';
import Footer from "./footer/Footer";
import { Card } from "antd";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex items-center justify-center w-full mt-56">
        <Bestoffer />
      </div>
    
      <div className="container max-w-screen-xl mx-auto my-16">
        <div className="flex items-center justtify-between wrap space-x-4">
          {offers.map(offer => (
            <OfferCardItem key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
      <Brandlogo />
   
      <Footer /> 
    </>
  );
}

export default App;
