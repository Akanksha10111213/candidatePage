
import React from "react";
import "./Header.css";
import profile from "../assets/profile.png"
import bellicon from "../assets/bellicon.png"
import ai from "../assets/ai.png"
import downarrow from "../assets/downarrow.png"
import questionmark from "../assets/questionmark.png"
import logo from "../assets/logo.png"
import searchbar from "../assets/searchbar.png"
const Header = () => {
  return (
    <header className="candidate-header">

      <div className="candidate-brand">
        <div className="candidate-logo">
          <img src={logo} alt="logo" className="candidate-img-logo" />
        </div>

        <div className="candidate-brand-text">
          <h3>AI Education & Workforce Development Platform</h3>
          <p>Connect • Discover • Succeed</p>
        </div>
      </div>

      <div className="candidate-search">
        <span className="candidate-search-icon">
            <img src={searchbar} alt="searchbar" className="candidate-searchbar-icon" />
        </span>
        <input
          type="text"
          placeholder="Search Keyword, Location,..."
        />
      </div>

      <div className="candidate-header-actions">
        <button className="candidate-header-icon" title="Notifications">
          <img src={bellicon} alt="bellicon" className="candidate-navbar-icons"/>
          <span className="candidate-notification-dot"></span>
        </button>

        <button className="candidate-header-icon" title="AI Assistant">
          <img src={ai} alt="ai" className="candidate-navbar-icons"/>
          
        </button>

        <button className="candidate-header-icon" title="Help">
          <img src={questionmark} alt="questionmark"  className="candidate-navbar-icons"/>
        </button>

        <img
          className="candidate-header-profile"
          src={profile} alt="profile" 
        />

        <button className="candidate-dropdown-icon">
          <img src={downarrow} alt="downarrow" className="candidate-navbar-icons"/>
        </button>
      </div>

    </header>
  );
};

export default Header;
