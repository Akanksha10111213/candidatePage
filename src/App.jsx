
import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideNavbar from "./components/SideNavbar";

const App = () => {
  return (
    <div
      className="candidate-dashboard"
     
    >
      <Header />

      <div className="candidate-dashboard-layout">
        <SideNavbar />

        <main className="candidate-main-content">
       
        </main>
      </div>
    </div>
  );
};

export default App;
