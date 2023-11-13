import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <div className="page-top">
        <header className="header">
          <Link to="/" className="logo">
            GadgetArena
          </Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link to="/home" className="link link-theme link-arrow">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="link link-theme link-arrow">
                Products
              </Link>
            </li>
            <li>
              <Link to="/" className="link link-theme link-arrow">
                About us
              </Link>
            </li>
            <li>
              <Link to="/" className="link link-theme link-arrow">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="link link-theme link-arrow">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/" className="link link-theme link-arrow">
                <button type="button">Login</button>
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}
