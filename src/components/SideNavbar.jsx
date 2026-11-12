
import React, { useState } from "react";
import "./SideNavbar.css";
import downarrow from "../assets/downarrow.png"
const SideNavbar = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [applicationsOpen, setApplicationsOpen] = useState(false);

  const menuItems = [
    "Dashboard",
    "Job Search",
    "Interview Schedule",
    "Assessments",
    "Applications",
    "Offers",
    "Training & Courses",
    "Resume Manager",
    "Profile",
    "Notification",
    "Settings",
  ];

  const handleMenuClick = (item) => {
    setActiveMenu(item);

    if (item === "Applications") {
      setApplicationsOpen(!applicationsOpen);
    }
  };

  return (
    <aside className="candidate-sidebar">

      <nav className="candidate-sidebar-menu">
        {menuItems.map((item, index) => (
          <div key={index}>
            <button
              className={`candidate-nav-item ${
                activeMenu === item ? "candidate-nav-active" : ""
              }`}
              onClick={() => handleMenuClick(item)}
            >
              <span>{item}</span>

              {item === "Applications" && (
                <span className="candidate-nav-arrow">
                  {applicationsOpen ? "⌃" : <><img src={downarrow} alt="downarrow" className="candidate-downarrow-sidenav"/></>}
                </span>
              )}
            </button>

            {item === "Applications" && applicationsOpen && (
              <div className="candidate-submenu">
                <button
                  onClick={() => setActiveMenu("Applied Jobs")}
                  className={
                    activeMenu === "Applied Jobs"
                      ? "candidate-submenu-active"
                      : ""
                  }
                >
                  Applied Jobs
                </button>

                <button
                  onClick={() => setActiveMenu("Application Status")}
                  className={
                    activeMenu === "Application Status"
                      ? "candidate-submenu-active"
                      : ""
                  }
                >
                  Application Status
                </button>
              </div>
            )}
          </div>
        ))}
      </nav>

    </aside>
  );
};

export default SideNavbar;
