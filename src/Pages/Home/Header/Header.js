import React from "react";
import Contact from "../../Shared/Contact/Contact";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-section">
      <Contact></Contact>
      <Navigation></Navigation>
      <Banner></Banner>
    </div>
  );
};

export default Header;
