import React from "react";
import { Link } from "react-router-dom";
function MenuBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to={"/create-employee"} classname="nav-link">
            react MERN Stack App
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to={"/create-employee"} classname="nav-link">
                  Create Employee
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/employee-list"} classname="nav-link">
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
