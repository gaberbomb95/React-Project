import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "reactstrap";
import "./Nav.css";

const Nav = () => {
  return (
    <Navbar>
      <Link to="/">
        <h3>Home</h3>
      </Link>

      <Link to="/generateuser">
        <h3>Generate User</h3>
      </Link>

      <h1 className="title">MVP Filler</h1>

      <Link to="/myusers">
        <h3>My Users</h3>
      </Link>
    </Navbar>
  );
};

export default Nav;
