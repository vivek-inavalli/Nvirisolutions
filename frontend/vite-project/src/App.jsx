import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "../components/ContactPage";
import FeaturedVendors from "../components/FeaturedVendors";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Steps from "../components/setps/Steps";
import Takecare from "../components/Takecare";
import Testimonials from "../components/Testimonials";
import UserLoginpage from "../components/UserLoginpage";
import BusinessLoginpage from "../components/BusinessLoginpage";
import ShowData from "../components/ShowData";

const HomePage = () => (
  <>
    <Navbar />
    <Takecare />
    <Services />
    <Steps />
    <FeaturedVendors />
    <Testimonials />
    <ContactPage />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business-login" element={<BusinessLoginpage />} />
        <Route path="/login" element={<UserLoginpage />} />
        <Route path="/showdata" element={<ShowData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
