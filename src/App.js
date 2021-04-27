import React from "react";
import Companyregister from "./admin/Companyregister";
import Adminlogin from "./admin/Adminlogin";
import { Route, Switch } from "react-router-dom";
import './App.less';
import Navbar from "./navbar/Navbar";
import Flightsearch from "./pages/Flightsearch";
import Home from "./pages/Home";
import Flightsuggestion from "./Flightsuggestion";
import Flightsug from "./Flightsug";
import Flightsuggested from "./Flightsuggested";
import Charges from "./Charges";
import Hotelbook from "./Hotelbook";
import Flightsidebar from "./Filtersidebars";
import Flightcard from "./Flightcard";
import Flightimg from "./Flightimg";
import Flightreview from "./Flightreview";
import Flightselect from "./Flightselect";
import Faresumm from "./Faresumm";
import Travellerdetail from "./Travellerdetail";
import Assignment from "./Assignment";
import Hotelbooking from "./Hotelbooking";
import Cityarea from "./Cityarea";
import Doubleroom from "./Doubleroom";
import Guestreviews from "./Guestreviews";




function App() {
  return (
    <>
    {/*<Adminlogin />
    <Companyregister />
    */}
  

    {/*
    <Navbar />
    <div className="header-margin">
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/flight-search" component={Flightsearch} />
      
        <Route path = "/login" component={Companyregister} />
      
      </Switch>
    </div
    

    <Flightsug />
     <Flightsuggestion />
      <Flightsuggested />
<Charges />
  <Hotelbook />
   <Flightsidebar />
   <Flightcard />
 <Flightimg />
 <Flightreview />
  <Flightselect />
   <Faresumm />
   
<Flightreview />
 <Hotelbooking />
 <Cityarea />
   <Doubleroom />
   
    
   
    >*/}
    <Guestreviews />
  
    
   
  
  
        
    </>
  );
}

export default App;
