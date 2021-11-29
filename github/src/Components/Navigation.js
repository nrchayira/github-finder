import React from "react";
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import "../index.css";

function Navigation() {
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="./users">Search User</Link>
      </div>
    </div>
  );
}

export default Navigation;