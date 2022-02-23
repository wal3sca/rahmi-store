import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            RahMi
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              <span className="glyphicon glyphicon-user"></span> Sign Up
            </a>
          </li>
          <li>
            <a href="#">
              <span className="glyphicon glyphicon-log-in"></span> Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
