import React from "react";
import { Link } from "react-router-dom";
function MenuBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        {" "}
        <div className="container">
          <Link to={"/create-employee"} className="nav-link">
            React MERN Stack App
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-8">
              <li className="nav-item">
                <Link to={"/create-employee"} className="nav-link">
                  Create Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/employee-list"} className="nav-link">
                  Employee List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default MenuBar;
