import ladystanding from "../../images/ladystanding.jpg";
import "./index.css";
import { Link } from "react-router-dom";
import React from "react";

const Takecare = () => {
  return (
    <div className="maincontainer">
      <div className="inner">
        <h1 className="heading">Take care of your home need now!</h1>
        <p className="para">
          ServicePro is your one-stop solution to troubleshoot, choose a vendor
          and book a technician.
        </p>
        <div className="selectandparamini2">
          <select className="selectoptions">
            <option>Hyderabad</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
            <option>Delhi</option>
            <option>Chennai</option>
            <option>Bangalore</option>
          </select>
          <p className="minipara">Only in Ameerpet, Gachibowli, & Madhapur</p>
        </div>
        <div className="hyd">
          <Link to="/login">
            <input className="input" placeholder="Search Home Appliances" />
          </Link>
          <Link to="/login">
            <button className="search">Search</button>
          </Link>
        </div>
      </div>
      <div>
        <img src={ladystanding} className="img" />
      </div>
    </div>
  );
};

export default Takecare;
